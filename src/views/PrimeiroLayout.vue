<script>
import menu from '../stores/menu';
export default {
  data() {
    return {
      isMobile: false,
      isAlertOpen: false,
      alertType: "error",
      alertMessage: "Erro desconhecido!",
      alertTimeout: 0,
      imagesPath: "src/assets/img/items/",
      itemImageUrl: "src/assets/img/items/default.webp",
      isCartOpen: false,
      isItemOpen: false,
      hasAdditional: false,
      isEditing: false,
      additionalItems: {
        remove: [
          { id: 1, name: "Queijo", checked: false },
          { id: 2, name: "Molho", checked: false },
          { id: 3, name: "Tomate", checked: false },
          { id: 4, name: "Cebola", checked: false },
        ],
        add: [
          { id: 1, name: "Queijo extra", price: 2, checked: false },
          { id: 2, name: "Barbecue extra", price: 2, checked: false },
          { id: 3, name: "Maionese extra", price: 3, checked: false },
          { id: 4, name: "Batata frita extra", price: 10, checked: false },
        ],
      },
      activeItem: {
        id: 0,
        type: "",
        name: "",
        description: "",
        price: "",
        totalPrice: "",
        image: "",
        additional: {
          remove: [],
          add: [],
        },
        index: false,
      },
      cartList: [],
      totalPrice: 0,
      cartCount: 0,
      menu: menu,
    }
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth < 1008;
    },
    alert(type, message) {
      this.alertType = type;
      this.alertMessage = message;
      this.isAlertOpen = true;

      if (this.alertTimeout)
        clearTimeout(this.alertTimeout);

      this.alertTimeout = setTimeout(() => {
        this.isAlertOpen = false;
      }, 2000);
    },

    scrollTo(section) {
      this.$refs[section].scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },

    openCart() {
      this.isCartOpen = true;
    },

    closeCart() {
      if(this.isCartOpen)
        this.isCartOpen = false;
    },

    preloadImage(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
      });
    },

    async openItem(type, id, edit = false, additional = false, index = false) { 
      let item = this.menu[type].find(item => item.id === id);

      this.activeItem.id = id;
      this.activeItem.type = type;
      this.activeItem.name = item.name;
      this.activeItem.description = item.description;
      this.activeItem.price = item.price;
      this.activeItem.totalPrice = item.price;
      this.activeItem.image = item.image;
      this.activeItem.index = index;

      if(type == 'hamburgers' || type == 'hotdogs')
        this.hasAdditional = true;
      else
        this.hasAdditional = false;

      if(edit && additional) {
        this.isEditing = true;
        this.activeItem.additional = JSON.parse(JSON.stringify(additional));

        this.activeItem.additional.remove.forEach(item => {
          let correspondingItem = this.additionalItems.remove.find(
            additionalItem => additionalItem.id === item.id
          );
          if (correspondingItem)
            correspondingItem.checked = true;
        });

        this.activeItem.additional.add.forEach(item => {
          let correspondingItem = this.additionalItems.add.find(
            additionalItem => additionalItem.id === item.id
          );
          if (correspondingItem)
            correspondingItem.checked = true;
        });

        this.refreshItemPrice();
      }

      // Pré-carrega a imagem e aguarda o carregamento completo
      const preloadedImage = await this.preloadImage(this.imagesPath + item.image);

      if (this.isMobile)
        document.body.classList.add('no-scroll');

      this.isItemOpen = true;

      setTimeout(() => {
        this.itemImageUrl = preloadedImage.src;
      }, 200);
    },

    closeItem() {
      this.resetAdditionalChecks();
      this.isEditing = false;
      this.isItemOpen = false;
      this.itemImageUrl = this.imagesPath + "default.webp";

      if (this.isMobile)
        document.body.classList.remove('no-scroll');
    },

    refreshItemPrice() {
      let calculatedPrice = this.activeItem.price;
      this.activeItem.additional.add.forEach((item) => {
        calculatedPrice += item.price;
      });

      this.activeItem.totalPrice = calculatedPrice;
    },

    refreshCartPrice() {
      let calculatedPrice = 0;
      this.cartList.forEach((item) => {
        calculatedPrice += item.totalPrice;
      });

      this.totalPrice = calculatedPrice;
    },

    addItem() {
      let additionalCopy = JSON.parse(JSON.stringify(this.activeItem.additional));

      if(this.activeItem.index !== false) {
        this.cartList[this.activeItem.index] = {
          id: this.activeItem.id,
          name: this.activeItem.name,
          description: this.activeItem.description,
          price: this.activeItem.price,
          totalPrice: this.activeItem.totalPrice,
          image: this.activeItem.image,
          additional: additionalCopy,
          type: this.activeItem.type,
        }
        this.alert('success', 'Item atualizado!');
      } else {
        this.cartList.push({
          id: this.activeItem.id,
          name: this.activeItem.name,
          description: this.activeItem.description,
          price: this.activeItem.price,
          totalPrice: this.activeItem.totalPrice,
          image: this.activeItem.image,
          additional: additionalCopy,
          type: this.activeItem.type,
        });
        this.cartCount++;

        this.alert('success', 'Item adicionado ao carrinho!');
      }

      this.openCart();
      this.refreshCartPrice();
      this.closeItem();
    },

    removeItem(item) {
      this.cartList.splice(item, 1);
      this.refreshCartPrice();
      this.cartCount--;

      if(this.cartCount == 0)
        this.alert('info', 'Seu carrinho está vazio!');
    },

    editItem(item) {
      this.openItem(this.cartList[item].type, this.cartList[item].id, true, this.cartList[item].additional, item)
    },

    checkAdditional(item, type) {
      item.checked = !item.checked;
      let index = this.activeItem.additional[type].findIndex((el) => el.id === item.id);

      if(item.checked && index === -1) {
        this.activeItem.additional[type].push({
          id: item.id,
          name: item.name,
          price: type === 'add' ? item.price : 0
        });
      } else {
        this.activeItem.additional[type].splice(index, 1);
      }

      this.refreshItemPrice();
    },

    resetAdditionalChecks() {
      this.additionalItems.remove.forEach((item) => {
        item.checked = false;
      });

      this.additionalItems.add.forEach((item) => {
        item.checked = false;
      });

      this.activeItem.additional.remove.splice(0);
      this.activeItem.additional.add.splice(0);
    },
  },
  computed: {
    alertClasses: function() {
      return {
        'alert-open': this.isAlertOpen,
        'alert-success': this.alertType === 'success',
        'alert-info': this.alertType === 'info',
        'alert-error': this.alertType === 'error',
      };
    },
  },
  mounted() {
    this.updateIsMobile();
    const resizeObserver = new ResizeObserver(this.updateIsMobile);
    resizeObserver.observe(document.documentElement);
    this.updateIsMobile();
  },
  beforeDestroy() {
    const resizeObserver = new ResizeObserver(this.updateIsMobile);
    resizeObserver.unobserve(document.documentElement);
  }
}
</script>

<template>
  <header>
    <!--
      Referências:
      https://oahufoodbeer.menudino.com/
      https://listerburger.com.br/menu
      https://site.labrasaburger.com.br/cardapio/

      https://unsplash.com/s/photos/burger
      https://www.upscale.media/upload
    -->
    <div id="alert" :class="alertClasses">
      <div id="alert-border"></div>
      <div id="alert-text">
        <font-awesome-icon v-if="alertType === 'error'" :icon="['fas', 'circle-xmark']" class="alert-icon"/>
        <font-awesome-icon v-else-if="alertType === 'info'" :icon="['fas', 'circle-exclamation']" class="alert-icon"/>
        <font-awesome-icon v-else-if="alertType === 'success'" :icon="['fas', 'circle-check']" class="alert-icon"/>
        <div id="alert-message">{{ this.alertMessage }}</div>
      </div>
    </div>
    <section id="header-content">
        <img src="src/assets/img/logo.jpg" id="place-image" alt="Foto da hamburgueria">
        <div id="place-name">Bersk Burger</div>
        <div id="place-address" class="place-info-box">
          <font-awesome-icon :icon="['fass', 'location-dot']" /> 
          <div id="address-info">BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</div>
        </div>
        <div id="place-operation">Estabelecimento aberto</div>
        <div id="place-time" class="place-info-box">
          <font-awesome-icon :icon="['fass', 'clock']" />
          <div id="time-info">25 min - 45 min</div>
        </div>
    </section>
    <section id="options-modal-background" @click="closeItem()" :class="{'options-modal-background-open' : isItemOpen}"></section>
    <div id="options-modal" :class="{'options-modal-open' : isItemOpen}" >
      <button type="button" id="modal-back" class="button" @click="closeItem()">VOLTAR</button>
      <div id="options-modal-item">
        <img id="item-image-modal" :src="itemImageUrl">
        <div id="item-information-modal">
          <h2 id="item-title-modal">{{ this.activeItem.name }}</h2>
          <div id="item-description-modal">{{ this.activeItem.description }}</div>
        </div>
      </div>
      <div id="item-additional-modal" :class="{'item-additional-modal-open': hasAdditional}">
        <div class="item-additional-box">
          <h3 class="item-additional-title">Remover</h3>
          <ul class="item-additional-list">
            <li v-for="(itemRemove, index) in this.additionalItems.remove" :key="index"> {{ itemRemove.name }}
              <div :class="['item-additional-checkbox', { 'item-additional-checked': itemRemove.checked }]" @click="checkAdditional(itemRemove, 'remove')">✔</div>
            </li>
          </ul>
        </div>
        <div class="item-additional-box">
          <h3 class="item-additional-title">Adicionar</h3>
          <ul class="item-additional-list">
            <li v-for="(itemAdd, index) in this.additionalItems.add" :key="index"> {{ itemAdd.name }} + R${{ itemAdd.price + ',00'}}
              <div :class="['item-additional-checkbox', { 'item-additional-checked': itemAdd.checked }]" @click="checkAdditional(itemAdd, 'add')">✔</div>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" id="modal-add" class="button" @click="addItem()">{{ isEditing ? 'ATUALIZAR' : 'ADICIONAR' }} <div id="item-price-modal">{{ 'R$' + this.activeItem.totalPrice + ',00'}}</div></button>
    </div>
  </header>
  <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#ffffff" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,80C420,64,480,64,540,101.3C600,139,660,213,720,240C780,267,840,245,900,245.3C960,245,1020,267,1080,250.7C1140,235,1200,181,1260,176C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
  <section id="navigation">
    <div id="navigation-items">
      <p class="navigation-item" @click="scrollTo('hamburgers')">Hambúrgueres</p>
      <p class="navigation-item" @click="scrollTo('hotdogs')">Hotdogs</p>
      <p class="navigation-item" @click="scrollTo('servings')">Porções</p>
      <p class="navigation-item" @click="scrollTo('juices')">Sucos</p>
      <p class="navigation-item" @click="scrollTo('otherDrinks')">Outras bebidas</p>
      <p class="navigation-item" @click="scrollTo('desserts')">Sobremesas</p>
    </div>
    <div id="cart-icon" @click="toggleCart()" :class="{ 'cart-active' : isCartOpen}">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" v-if="!isCartOpen || !isMobile"/>
      <div id="cart-back-mobile" v-else>VOLTAR</div>
    </div>
    <div id="cart-item-count" v-if="this.cartList.length && (!isCartOpen || !isMobile)" @click="toggleCart()" :class="{ 'cart-item-count-active' : isCartOpen}">{{ this.cartCount }}</div>
    <nav id="cart" class="dropdown" :class="{ 'dropdown-open' : isCartOpen}">
      <h3 id="cart-title">Meu pedido</h3>
      <div id="cart-empty-message" v-if="!this.cartList.length">Opa! Seu carrinho está vazio!</div>
      <div id="cart-items">
        <div class="cart-item" v-for="(cartItem, index) in this.cartList" :key="cartItem.id">
          <img class="cart-item-image" :src="imagesPath + cartItem.image">
          <div class="cart-item-info">
            <div class="cart-item-name">{{ cartItem.name }}<div class="cart-item-price">{{'R$' + cartItem.price + ',00'}}</div></div>
            <div class="cart-item-additional">
              <ul class="cart-item-additional-list cart-item-additional-remove">
                <li v-for="removeItem in this.cartList[index].additional.remove" :key="removeItem.id">{{ removeItem.name }}</li>
              </ul>
              <ul class="cart-item-additional-list cart-item-additional-add">
                <li v-for="addItem in this.cartList[index].additional.add" :key="addItem.id">{{ addItem.name }}<div class="cart-item-add-price">{{'R$' + addItem.price + ',00'}}</div></li>
              </ul>
            </div>
            <div class="cart-item-total" v-if="this.cartList[index].additional.add.length">Total do item:<div class="cart-item-total-price">{{'R$' + this.cartList[index].totalPrice + ',00'}}</div></div>
            <div  class="cart-item-actions">
              <button type="button" class="cart-item-button cart-item-edit" @click="editItem(index)"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></button>
              <button type="button" class="cart-item-button cart-item-remove" @click="removeItem(index)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
            </div>
          </div>
        </div>
      </div>
      <div id="cart-info">
        <div id="cart-total-price">TOTAL: {{'R$' + this.totalPrice + ',00'}}</div>
        <button type="button" id="finish-order" class="button">FINALIZAR PEDIDO</button>
      </div>
    </nav>
  </section>
  <section id="menu-items" v-if="!isCartOpen || !isMobile">
    <h2 class="menu-category" ref="hamburgers">Hambúrgueres</h2>
    <div class="menu-item" v-for="hamburger in menu.hamburgers" :key="hamburger.id" @click="openItem('hamburgers', hamburger.id)">
      <div class="item-information">
        <h3 class="item-name">{{ hamburger.name }}</h3>
        <div class="item-description">{{ hamburger.description }}</div>
        <div class="item-price">{{ 'R$' + hamburger.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + hamburger.image">
    </div>

    <h2 class="menu-category" ref="hotdogs">Hotdogs</h2>
    <div class="menu-item" v-for="hotdog in menu.hotdogs" :key="hotdog.id" @click="openItem('hotdogs', hotdog.id)">
      <div class="item-information">
        <h3 class="item-name">{{ hotdog.name }}</h3>
        <div class="item-description">{{ hotdog.description }}</div>
        <div class="item-price">{{ 'R$' + hotdog.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + hotdog.image">
    </div>

    <h2 class="menu-category" ref="servings">Porções</h2>
    <div class="menu-item" v-for="serving in menu.servings" :key="serving.id" @click="openItem('servings', serving.id)">
      <div class="item-information">
        <h3 class="item-name">{{ serving.name }}</h3>
        <div class="item-description">{{ serving.description }}</div>
        <div class="item-price">{{ 'R$' + serving.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + serving.image">
    </div>

    <h2 class="menu-category" ref="juices">Sucos</h2>
    <div class="menu-item" v-for="juice in menu.juices" :key="juice.id" @click="openItem('juices', juice.id)">
      <div class="item-information">
        <h3 class="item-name">{{ juice.name }}</h3>
        <div class="item-description">{{ juice.description }}</div>
        <div class="item-price">{{ 'R$' + juice.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + juice.image">
    </div>

    <h2 class="menu-category" ref="otherDrinks">Outras bebidas</h2>
    <div class="menu-item" v-for="otherDrink in menu.otherDrinks" :key="otherDrink.id" @click="openItem('otherDrinks', otherDrink.id)">
      <div class="item-information">
        <h3 class="item-name">{{ otherDrink.name }}</h3>
        <div class="item-description">{{ otherDrink.description }}</div>
        <div class="item-price">{{ 'R$' + otherDrink.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + otherDrink.image">
    </div>

    <h2 class="menu-category" ref="desserts">Sobremesas</h2>
    <div class="menu-item" v-for="dessert in menu.desserts" :key="dessert.id" @click="openItem('desserts', dessert.id)">
      <div class="item-information">
        <h3 class="item-name">{{ dessert.name }}</h3>
        <div class="item-description">{{ dessert.description }}</div>
        <div class="item-price">{{ 'R$' + dessert.price + ',00'}}</div>
      </div>
      <img class="item-image" :src="imagesPath + dessert.image">
    </div>
  </section>
  <footer>
    <div id="footer-content">
      <img id="footer-logo" src="../assets/img/burger.png" alt="Logo do restaurante">
      <div>Desenvolvido por Gustavo José Baierski</div>
      <div>Instituto Federal Catarinense - Campus Araquari</div>
      <div>2023</div>
    </div>
  </footer>
</template>

<style lang="scss">
  @import "../assets/css/primeiroLayout/big.scss";
  @import "../assets/css/primeiroLayout/medium.scss";
  @import "../assets/css/primeiroLayout/small.scss";
</style>