<script>
export default {
    data() {
    return {
      imagesPath: "src/assets/img/items/",
      itemImageUrl: "src/assets/img/items/default.webp",
      isCartOpen: false,
      isItemOpen: false,
      hasAdditional: false,
      additionalItems: {
        remove: [
          { id: 1, name: "Queijo", checked: false },
          { id: 2, name: "Molho", checked: false },
          { id: 3, name: "Tomate", checked: false },
          { id: 4, name: "Cebola", checked: false },
        ],
        add: [
          { id: 1, name: "Queijo", price: 2, checked: false },
          { id: 2, name: "Hambúrguer", price: 5, checked: false },
          { id: 3, name: "Maionese extra", price: 3, checked: false },
          { id: 4, name: "Batata frita extra", price: 10, checked: false },
        ],
      },
      activeItem: {
        id: 0,
        name: "",
        description: "",
        price: "",
        totalPrice: "",
        image: "",
        additional: {
          remove: [],
          add: [],
        },
      },
      cartList: [],
      totalPrice: 0,
      cartCount: 0,
      menu: {
        hamburgers: [
          {
            id: 1,
            name: "Salada",
            description: "Pão cervejinha, 1x hambúrguer de 180g de costela, 1,5x queijo mussarela, maionese, molho especial, alface, tomate, cebola roxa e picles. Acompanha ketchup e molho especial separadamente.",
            price: 20,
            image: "salada.webp"
          },
          {
            id: 2,
            name: "Duplo Cheddar",
            description: "Pão brioche, 2x hambúrguer de 180g de costela, 3 camadas de queijo cheddar, maionese, bacon picadinho. Acompanha ketchup separadamente.",
            price: 32,
            image: "duploCheddar.webp"
          },
          {
            id: 3,
            name: "Simples",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, 1x queijo mussarela, maionese, molho especial, alface e tomate.",
            price: 15,
            image: "simples.webp"
          },
          {
            id: 4,
            name: "Bersk's Burger",
            description: "Pão brioche, 2x hambúrgueres de 180g de costela, 3 camadas de queijo mussarela, barbecue, maionese, molho especial, alface americana, tomate, cebola picadinha e picles. Acompanha ketchup, barbecue, molho especial e uma porção de batata com cheddar e bacon separadamente.",
            price: 70,
            image: "bersk.webp"
          },
          {
            id: 5,
            name: "Intense Burger",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo gorgonzola, cebola roxa crispy, 2x tiras de bacon, molho especial. Acompanha molho especial separadamente.",
            price: 29,
            image: "intense.webp"
          },
          {
            id: 6,
            name: "Flipicante",
            description: "Pão australiano, 1x hambúrguer de 200g de linguiça blumenau, queijo gorgonzola e queijo coalho, geléia de pimenta, molho especial, alface e cebola roxa chapeada. Acompanha ketchup, barbecue e molho especial separadamente.",
            price: 41,
            image: "flipicante.webp"
          },
          {
            id: 7,
            name: "Queso Caliente",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo empanado, geléia de pimenta, rúcula e tomate. Acompanha molho especial separadamente.",
            price: 49,
            image: "queso.webp"
          }
        ],
        hotdogs: [
          {
            id: 8,
            name: "Dog Simples",
            description: "Pão 25cm, salsicha, maionese, ketchup e mostarda. Acompanha ketchup e maionese separadamente.",
            price: 20,
            image: "dogsimples.webp"
          },
          {
            id: 9,
            name: "Dog Cheddar Bacon",
            description: "Pão 25cm, salsicha, maionese, ketchup, cheddar derretido e bacon picadinho. Acompanha ketchup e maionese separadamente.",
            price: 26,
            image: "dogCheddar.webp"
          },
          {
            id: 10,
            name: "Chickão",
            description: "Pão 35cm, 4x salsichas, maionese, ketchup, milho, bacon picadinho, frango desfiado, calabresa e molho verde. Acompanha ketchup e maionese separadamente.",
            price: 40,
            image: "chickao.webp"
          }
        ],
        servings: [
          {
            id: 11,
            name: "Fritas Simples",
            description: "400g de batata frita, muito cheddar, 100g de bacon.",
            price: 25,
            image: "fritasSimples.webp"
          },
          {
            id: 12,
            name: "O Comilão",
            description: "1 kg de batata frita, muito cheddar, 500g de coração de galinha, 500g de frango chapeado, 350g bacon em tiras, 500g de linguiça calabresa, 500g de picanha fatiada. Acompanha salada. Acompanha ketchup e maionese separadamente.",
            price: 220,
            image: "oComilao.webp"
          },
          {
            id: 13,
            name: "Chicken Nuggets",
            description: "500g de nuggets de frango. Acompanha Ketchup e a maionese especial.",
            price: 30,
            image: "nuggets.webp"
          }
        ],
        juices: [
          {
            id: 14,
            name: "Laranja",
            description: "600ml de suco de laranja natural.",
            price: 10,
            image: "sucoLaranja.webp"
          },
          {
            id: 15,
            name: "Uva",
            description: "600ml de suco de uva natural.",
            price: 10,
            image: "sucoUva.webp"
          },
          {
            id: 16,
            name: "Abacaxi com Hortelã",
            description: "600ml de suco de abacaxi com hortelã.",
            price: 10,
            image: "sucoAbacaxi.webp"
          },
          {
            id: 17,
            name: "Limonada",
            description: "400ml de limonada.",
            price: 10,
            image: "sucoLimonada.webp"
          }
        ],
        otherDrinks: [
          {
            id: 18,
            name: "Refrigerante",
            description: "Refrigerante 2L.",
            price: 14,
            image: "refrigerante.webp"
          },
          {
            id: 19,
            name: "Água com/sem gás",
            description: "700ml de água com ou sem gás.",
            price: 4,
            image: "agua.webp"
          },
          {
            id: 20,
            name: "Caipirinha de vinho",
            description: "400ml de caipirinha de vinho.",
            price: 14,
            image: "caipirinhaVinho.webp"
          }
        ],
        desserts: [
          {
            id: 21,
            name: "Coração Mole",
            description: "Bolo de chocolate utilizando leite condensado, cacau em pó e granulado. Serve 2 pessoas.",
            price: 30,
            image: "coracaoMole.webp"
          },
          {
            id: 22,
            name: "Casquinha",
            description: "Casquinha de sorvete de baunilha com cobertura de chocolate.",
            price: 7,
            image: "casquinha.webp"
          },
          {
            id: 23,
            name: "Bersk's Mix",
            description: "Pote de 1L de sorvete de baunilha com cobertura de chocolate e pedaços de chocolate. Serve de 2 à 4 pessoas.",
            price: 18,
            image: "bersksMix.webp"
          }
        ]
      }
    }
  },
  methods: {
    scrollTo(section) {
      this.$refs[section].scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    openCart() {
      this.isCartOpen = !this.isCartOpen;
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

    async openItem(type, id) { 
      let item = this.menu[type].find(item => item.id === id);

      this.activeItem.id = id;
      this.activeItem.name = item.name;
      this.activeItem.description = item.description;
      this.activeItem.price = item.price;
      this.activeItem.totalPrice = item.price;
      this.activeItem.image = item.image;

      if(type == 'hamburgers' || type == 'hotdogs')
        this.hasAdditional = true;
      else
        this.hasAdditional = false;

      // Pré-carrega a imagem e aguarda o carregamento completo
      const preloadedImage = await this.preloadImage(this.imagesPath + item.image);

      this.isItemOpen = true;

      setTimeout(() => {
        this.itemImageUrl = preloadedImage.src;
      }, 200);
    },

    closeItem() {
      this.isItemOpen = false;
      this.itemImageUrl = this.imagesPath + "default.webp";
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
        calculatedPrice += item.price;
      });

      this.totalPrice = calculatedPrice;
    },

    addItem() {
      this.cartList.push({
        id: this.activeItem.id,
        name: this.activeItem.name,
        description: this.activeItem.description,
        price: this.activeItem.price,
        image: this.activeItem.image,
      });

      this.refreshCartPrice();
      this.cartCount++;
    },

    removeItem(item) {
      this.cartList.splice(item, 1);
      this.refreshCartPrice();
      this.cartCount--;
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
      } else if (!item.checked && index !== -1) {
        this.activeItem.additional[type].splice(index, 1);
      }

      this.refreshItemPrice();
    },
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
    <section id="header-content">
        <img src="src/assets/img/logo.jpg" id="place-image">
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
              <div class="item-additional-checkbox" :class="['item-additional-checkbox', { 'item-additional-checked': itemRemove.checked }]" @click="checkAdditional(itemRemove, 'remove')">✔</div>
            </li>
          </ul>
        </div>
        <div class="item-additional-box">
          <h3 class="item-additional-title">Adicionar</h3>
          <ul class="item-additional-list">
            <li v-for="(itemAdd, index) in this.additionalItems.add" :key="index"> {{ itemAdd.name }} + R${{ itemAdd.price + ',00'}}
              <div class="item-additional-checkbox" :class="['item-additional-checkbox', { 'item-additional-checked': itemAdd.checked }]" @click="checkAdditional(itemAdd, 'add')">✔</div>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" id="modal-add" class="button" @click="addItem()">ADICIONAR <div id="item-price-modal">{{ 'R$' + this.activeItem.totalPrice + ',00'}}</div></button>
    </div>
  </header>
  <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="azure" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,80C420,64,480,64,540,101.3C600,139,660,213,720,240C780,267,840,245,900,245.3C960,245,1020,267,1080,250.7C1140,235,1200,181,1260,176C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
  <section id="navigation">
    <p class="navigation-item" @click="scrollTo('hamburgers')">Hambúrgueres</p>
    <p class="navigation-item" @click="scrollTo('hotdogs')">Hotdogs</p>
    <p class="navigation-item" @click="scrollTo('servings')">Porções</p>
    <p class="navigation-item" @click="scrollTo('juices')">Sucos</p>
    <p class="navigation-item" @click="scrollTo('otherDrinks')">Outras bebidas</p>
    <p class="navigation-item" @click="scrollTo('desserts')">Sobremesas</p>
    <font-awesome-icon :icon="['fas', 'cart-shopping']" id="cart-icon" @click="openCart()" :class="{ 'cart-active' : isCartOpen}"/>
    <div id="cart-item-count" v-if="this.cartList.length" :class="{ 'cart-item-count-active' : isCartOpen}">{{ this.cartCount }}</div>
    <nav id="cart" class="dropdown" :class="{ 'dropdown-open' : isCartOpen}">
      <h3 id="cart-title">Meu pedido</h3>
      <div id="cart-empty-message" v-if="!this.cartList.length">Opa! Seu carrinho está vazio!</div>
      <div id="cart-items">
        <div class="cart-item" v-for="(cartItem, index) in this.cartList" :key="cartItem.id">
          <img class="cart-item-image" :src="imagesPath + cartItem.image">
          <div class="cart-item-info">
            <div class="cart-item-name">{{ cartItem.name }}</div>
            <div class="cart-item-price">R$ {{ cartItem.price + ',00'}}</div>
            <div class="cart-item-actions">
              <button type="button" class="cart-item-button cart-item-edit"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></button>
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
  <section id="menu-items">
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
  <footer></footer>
</template>

<style lang="scss">

// SCSS Variables
$positive: rgb(66, 218, 104);
$negative: rgb(197, 54, 29);
$optional: rgb(224, 137, 22);
$main: azure;
$contrast: #e8effa;
$complementary: grey;

body {
  background-color: $contrast;
}

header {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/background-example.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 60%;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: $main;
}

::-webkit-scrollbar-thumb {
  background: $complementary;
}

#header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "Source Sans Pro", sans-serif;
  color: $main;
}

#place-image {
  width: 120px;
  height: 120px;
  border: solid 4px $main;
}

#place-name {
  font-size: 30px;
  letter-spacing: 4px;
  font-weight: bold;
  text-transform: uppercase;
}

#place-operation {
  font-size: 18px;
  padding: 10px 15px 10px 15px;
  letter-spacing: 1px;
  border-radius: 10px;
  background-color: $main;
  color: $positive;
  font-weight: bold;
}

#options-modal-background {
  position: fixed;
  z-index: 3;
  width: 100vw;
  min-height: 162.5vh;
  background-color: rgba(0, 0, 0, 0.4);
  transform: scale(0,0);
}

#options-modal {
  position: fixed;
  margin-top: 15%;
  z-index: 4;
  width: 30%;
  padding: 20px;
  border-radius: 10px;
  background-color: $main;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: scale(0,0);
  transition:transform .2s;
}

#modal-back {
  width: 200px;
}

#options-modal-item {
  display: flex;
  gap: 20px;
}

#item-image-modal {
  border-radius: 10px;
  width: 250px;
  align-self: center;
}

#item-title-modal {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: lighter;
  font-family: "Source Sans Pro", sans-serif;
}

#item-description-modal {
  color: $complementary;
  font-size: 18px;
  font-family: "Source Sans Pro", sans-serif;
}

#item-additional-modal {
  width: 100%;
  display: none;
  justify-content: center;
  gap: 20px;
}

#modal-add {
  background-color: black;
  font-size: 17px;
}

#wave {
  width: 100%;
  height: 300px;
  position: absolute;
  transform: translateY(-300px);
}

#navigation {
  width: 100%;
  height: 70px;
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: $main;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px, rgba(0, 0, 0, 0.01) 0px 10px 10px -5px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

#cart-icon {
  width: 30px;
  height: 30px;  
  font-size: 30px;
  right: 50px;
  top: 15px;
  color: $complementary;
  position: absolute;
  transition: all 0.2s;
}

#cart-icon:hover {
  color: black;
  cursor: pointer;
}

#cart-item-count {
  width: 15px;
  height: 15px;
  font-size: 13px;
  right: 45px;
  top: 15px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: $negative;
  color: $main;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.2s;
}

#cart {
  width: 400px;
  margin-top: 70px;
  right: 50px;
}

#cart-title {
  width: 340px;
  margin-left: 30px;
  color: $complementary;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  user-select: none;
}

#cart-empty-message {
  width: 100%;
  height: 80px;
  color: $complementary;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
}

#cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

#cart-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  user-select: none;
  color: $complementary;
  font-weight: 500;
  gap: 10px;
}

#finish-order {
  margin-bottom: 20px;
}

#menu-items {
  width: calc(100% - 50px);
  padding: 25px;
  gap: 25px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
}

.place-info-box {
  display: flex;
  gap: 5px;
}

.button {
  padding: 20px 40px 20px 40px;
  border: none;
  border-radius: 10px;
  background-color: $complementary;
  font-family: "Source Sans Pro", sans-serif;
  color: $main;
  word-spacing: 2px;
  transition: all 0.2s;
}

.button:hover {
  background-color: black;
  transform: translateY(-3px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
  cursor: pointer;
}

.options-modal-background-open {
  transform: scale(1,1) !important;
}

.options-modal-open {
  transform: scale(1,1) !important;
}

.item-additional-modal-open {
  display: flex !important;
}

.item-additional-box {
  width: 100%;
  height: 195px;
  border-radius: 10px;
  background-color: $contrast;
}

.item-additional-title {
  width: 100%;
  height: 35px;
  margin: 0px;
  border-radius: 10px 10px 0px 0px;
  font-size: 18px;
  background-color: black;
  color: $main;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  font-family: "Source Sans Pro", sans-serif;
}

.item-additional-list {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

.item-additional-list li {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.2s;
}

.item-additional-list li:hover {
  transition:transform .2s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
}

.item-additional-list li:last-child {
  border-radius: 0px 0px 10px 10px;
}

.item-additional-checkbox {
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: transparent;
  background-color: transparent;
  border: solid 1px $complementary;
  justify-self: flex-end;
}

.item-additional-checkbox:hover {
  cursor: pointer;
  border: solid 1px black;
}

.item-additional-checked {
  cursor: pointer;
  color: $main !important;
  border: solid 1px black !important;
  background-color: black !important;
}

.cart-active {
  background-color: $contrast;
  padding: 10px;
  border-radius: 10px;
}

.cart-item-count-active {
  transform: translate(-10px, 10px);
}

.dropdown {
    position: absolute;
    border-radius: 10px;
    background-color: $main;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
    transform: scale(1, 0);
    transition: transform .2s;
    transform-origin: top;
}

.dropdown-open {
    transform: scale(1,1);
}

.cart-item {
  width: 340px;
  padding: 10px 0px 10px 0px;
  background-color: $contrast;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  opacity: 0.9;
  border-radius: 10px;
}

.cart-item-info {
  width: 210px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: "Source Sans Pro", sans-serif;
}

.cart-item-name {
  font-size: 15px;
}

.cart-item-price {
  font-size: 13px;
}

.cart-item-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
}

.cart-item-button {
  width: 35px;
  font-size: 13px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-family: "Source Sans Pro", sans-serif;
  color: $main;
  font-weight: bold;
  background-color: $complementary;
  transition: all 0.2s;
}

.cart-item-button:hover {
  transform: translateY(-1px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
  cursor: pointer;
}

.cart-item-edit:hover {
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
}

.cart-item-remove:hover {
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
}


.navigation-item {
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  color: $complementary;
  transition: all 0.2s;
  user-select: none;
}

.navigation-item:hover {
  color: black;
  transform: translateY(-3px);
  cursor: pointer;
}

.menu-category {
  width: 900px;
  margin-bottom: 0px;
  color: $complementary;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
}

.menu-item {
  background-color: $main;
  width: 800px;
  height: 100px;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px, rgba(0, 0, 0, 0.01) 0px 10px 10px -5px;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.2s;
}

.menu-item:hover {
  cursor: pointer;
  transform: translateY(-3px);
}

.item-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 70%;
}

.item-name {
  margin: 0px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: lighter;
}

.item-description {
  width: 90%;
  color: $complementary;
}

.item-price {
  font-size: 20px;
}

.item-image {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: $complementary;
}
</style>