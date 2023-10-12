<script>
import menu from '../stores/menu';
export default {
  data() {
    return {
      // Variáveis do pedido:
      itemsToCheck: [
        {id: 2, requirements: [{ type: "add", id: 4 }]}, // Duplo cheddar + Fritas
        {id: 7, requirements: [{ type: "remove", id: 2 }]}, // Hotdog - Molho
        {id: 16,requirements: []}, // Água sem gás
      ],
      missingItems: [],
      invalidItems: [],
      extraItems: [],
      objectivesInformation: "",

      // Verificações
      isMobile: false,
      isAlertOpen: false,
      isCartOpen: false,
      isItemOpen: false,
      isObjectivesOpen: false,
      hasAdditional: false,
      isEditing: false,
      hasObjectiveInformation: false,
      objectivesDone: false,
      isFinishingOrder: false,

      // Alertas
      alertType: "error",
      alertMessage: "Erro desconhecido!",
      alertTimeout: 0,

      // Timer
      startTime: null,
      timerRunning: false,
      elapsedTime: 0,
      processingStartTime: 0,

      // Valores medidos
      stepCount: 0, // Quantidade de passos que o usuário levou para finalizar os objetivos
      finishAttempts: 0, // Quantidade de vezes que o usuário tentou finalizar o pedido
      totalTime: 0, // Tempo total que o usuário levou no teste do layout
      processingTime: 0, // Tempo de processamento da informação do usuário no modal de edição do item

      // Caminhos
      imagesPath: "src/assets/img/items/",
      itemImageUrl: "src/assets/img/items/default.webp",

      // Declaração de variáveis
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

    openObjectives() {
      this.closeItem();
      this.isObjectivesOpen = true;

      if (this.isMobile)
        document.body.classList.add('no-scroll');
    },

    closeObjectives() {
      if(this.isObjectivesOpen)
        this.isObjectivesOpen = false;

      if (this.isMobile)
        document.body.classList.remove('no-scroll');
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
      this.closeObjectives();
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
      this.updateProcessingTime();

      setTimeout(() => {
        this.itemImageUrl = preloadedImage.src;
      }, 200);
    },

    closeItem() {
      this.resetAdditionalChecks();
      this.isEditing = false;
      this.isItemOpen = false;
      this.updateProcessingTime();
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
      this.validateObjectives();
      this.closeItem();
    },

    removeItem(item) {
      this.cartList.splice(item, 1);
      this.refreshCartPrice();
      this.cartCount--;
      this.validateObjectives();

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

    finishOrder() {
      this.isFinishingOrder = true;
      this.finishAttempts++;

      if(this.objectivesDone) {
        this.totalTime = this.stopTimer();
        this.processingTime = this.formatTime(this.processingTime);

        console.log("Tempo total: " + this.totalTime);
        console.log("Quantidade de passos: " + this.stepCount);
        console.log("Tentativas de finalização: " + this.finishAttempts);
        console.log("Tempo de processamento da informação: " + this.processingTime);

        // this.$router.push({ name: 'objectivesL2' });
      } else {
        this.openObjectives();
        this.alert('error', 'Pedido incorreto! Verifique os objetivos.');
        this.isFinishingOrder = false;
      }
    },

    validateObjectives() {
      this.missingItems = [];
      this.invalidItems = [];
      this.extraItems = [];
      this.duplicateItems = [];

      this.resetObjectives();

      // Verifica itens duplicados
      const seenItemIds = {};

      for (const item of this.cartList) {
        const itemId = item.id;

        if (seenItemIds[itemId])
          this.duplicateItems.push(item.id);
        else
          seenItemIds[itemId] = true;
      }

      // Remove IDs duplicados dentro do array
      this.duplicateItems = this.duplicateItems.filter((id, index, self) => {
        return self.indexOf(id) === index;
      });

      // Cria um mapa de itens no carrinho para facilitar a verificação
      const cartItemMap = new Map(this.cartList.map(item => [item.id, item]));

      this.itemsToCheck.forEach(itemToCheck => {
        const item = cartItemMap.get(itemToCheck.id);

        if (!item) {
          this.missingItems.push(itemToCheck.id);
          return;
        } else {
          if (itemToCheck.requirements.length === 0) {
            this.markObjective(itemToCheck.id, 'done');
          }

          itemToCheck.requirements.forEach(requirement => {
            if (requirement.type === "remove") {
              if ( // Verifica se o adicional selecionado está correto:
                (item.additional && Array.isArray(item.additional.remove) && !item.additional.remove.some(removeItem => removeItem.id === requirement.id))
                || // Verifica se há itens adicionais dentro de "remove" não especificados:
                (Array.isArray(item.additional.remove) && item.additional.remove.length > 1)
                || // Verifica se há itens adicionais dentro de "add" não especificados:
                (item.additional && Array.isArray(item.additional.add) && item.additional.add.length > 0)
              ) {
                this.invalidItems.push(itemToCheck.id);
                this.markObjective(itemToCheck.id, 'wrong');
                return;
              }
            } else if (requirement.type === "add") {
              if ( // Verifica se o adicional selecionado está correto:
                (item.additional && Array.isArray(item.additional.add) && !item.additional.add.some(addItem => addItem.id === requirement.id))
                || // Verifica se há itens adicionais dentro de "add" não especificados:
                (Array.isArray(item.additional.add) && item.additional.add.length > 1)
                || // Verifica se há itens adicionais dentro de "remove" não especificados:
                (item.additional && Array.isArray(item.additional.remove) && item.additional.remove.length > 0)
              ) {
                this.invalidItems.push(itemToCheck.id);
                this.markObjective(itemToCheck.id, 'wrong');
                return;
              }
            }
            this.markObjective(itemToCheck.id, 'done');
            return;
          });
        }

        this.duplicateItems.forEach(duplicateItem => {
          if(duplicateItem === itemToCheck.id) {
            this.markObjective(itemToCheck.id, 'wrong');
            return;
          }
        });
      });

      // Verifica se há itens extras no carrinho
      this.cartList.forEach(item => {
        if (!this.itemsToCheck.some(itemToCheck => itemToCheck.id === item.id) && !this.extraItems.includes(item.id)) {
          this.extraItems.push(item.id);
        }
      });

      this.objectivesInformation = "";

      if (this.invalidItems.length > 0) {
        this.objectivesInformation += `<b>Itens com problemas:</b> ${this.invalidItems.join(", ")}<br>`;
      }

      if (this.extraItems.length > 0) {
        this.objectivesInformation += `<b>Itens extras:</b> ${this.extraItems.join(", ")}<br>`;
      }

      if (this.duplicateItems.length > 0) {
        this.objectivesInformation += `<b>Itens duplicados:</b> ${this.duplicateItems.join(", ")}<br>`;
      }

      if (this.objectivesInformation === "" && this.missingItems.length === 0) {
        this.hasObjectiveInformation = true;
        this.objectivesDone = true;
        this.objectivesInformation = "O carrinho atende aos objetivos especificados.";
      } else if (this.objectivesInformation !== ""){
        this.hasObjectiveInformation = true;
        this.objectivesDone = false;
        this.objectivesInformation = this.getUpdatedObjectivesInformation();
      } else {
        this.hasObjectiveInformation = false;
        this.objectivesDone = false;
      }
      this.stepCount++;
    },

    resetObjectives() {
      const objectives = document.querySelectorAll(".objective");
      const icons = document.querySelectorAll(".objective-icon-status");

      objectives.forEach(objective => {
        objective.classList.remove("objective-normal", "objective-done", "objective-wrong");
      });
      
      objectives.forEach(objective => {
        objective.classList.add("objective-normal");
      });
      
      icons.forEach(icon => {
        icon.classList.remove("objective-status-normal", "objective-status-done", "objective-status-wrong");
      });

      icons.forEach(icon => {
        icon.classList.add("objective-status-normal");
      });
    },

    markObjective(id, type) {
      const objective = document.getElementById('objective-' + id.toString());
      const icon = document.getElementById('objective-icon-' + id.toString());

      objective.classList.remove("objective-normal", "objective-done", "objective-wrong");
      objective.classList.add("objective-" + type);

      icon.classList.remove("objective-status-normal", "objective-status-done", "objective-status-wrong");
      icon.classList.add("objective-status-" + type);
    },

    getMenuName(id) {
      for (const category in this.menu) {
        const item = this.menu[category].find(item => item.id === id);
        if (item) {
          return item.name;
        }
      }
    },

    getUpdatedObjectivesInformation() {
      const regex = /(\d+)/g; // Busca os IDs na string para transformá-los no nome
      const updatedString = this.objectivesInformation.replace(regex, (match) => {
        const id = parseInt(match);
        const name = this.getMenuName(id);
        return name || match; // Se o nome não for encontrado, mantém o número original
      });
      return updatedString;
    },

    startTimer() {
      this.startTime = Date.now() / 1000;
      this.timerRunning = true;
      this.updateElapsedTime();
    },

    stopTimer() {
      if (this.timerRunning) {
        this.elapsedTime = Date.now() / 1000 - this.startTime;
        this.timerRunning = false;
      }
      return this.formatTime(this.elapsedTime);
    },

    updateElapsedTime() {
      if (this.timerRunning) {
        this.elapsedTime = Date.now() / 1000 - this.startTime;
        requestAnimationFrame(this.updateElapsedTime);
      }
    },

    formatTime(timeInSeconds) {
      return timeInSeconds.toFixed(2);
    },

    updateProcessingTime() {
      if (this.isItemOpen) {
        this.processingStartTime = Date.now();
      } else {
        if (this.processingStartTime) {
          const processingEndTime = Date.now();
          const processingElapsedTime = (processingEndTime - this.processingStartTime) / 1000;
          this.processingTime += processingElapsedTime;
          this.processingStartTime = 0;
        }
      }
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

    getActualTime() {
      return this.formatTime(this.elapsedTime);
    },
  },
  mounted() {
    this.updateIsMobile();
    const resizeObserver = new ResizeObserver(this.updateIsMobile);
    resizeObserver.observe(document.documentElement);
    this.updateIsMobile();

    // Evento que verifica mudança no histórico de navegação (voltar)
    window.addEventListener('popstate', () => {
      this.isMobile ? this.closeItem() : history.go(-1); 
    });

    this.startTimer();
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
      https://storyset.com/
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
        <div id="objectives-icon" @click="openObjectives()" :class="{ 'objectives-active' : isObjectivesOpen}">
          <font-awesome-icon :icon="['fas', 'circle-question']" />
          <div id="objectives-status-indicator" v-if="this.hasObjectiveInformation && (!isObjectivesOpen || !isMobile)" @click="openObjectives()">
            <font-awesome-icon v-if="objectivesDone" :icon="['fas', 'circle-check']" class="objectives-status-indicator-icon indicator-icon-positive"/>
            <font-awesome-icon v-else :icon="['fas', 'circle-xmark']" class="objectives-status-indicator-icon"/>
          </div>
        </div>
        <img src="src/assets/img/logo-l2.jpg" id="place-image" alt="Foto da hamburgueria">
        <div id="place-name">Great Burger</div>
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
      <button type="button" id="modal-back" class="button" @click="closeItem()"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>
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
    <section id="objectives-modal-background" @click="closeObjectives()" :class="{'objectives-modal-background-open' : isObjectivesOpen}"></section>
    <div id="objectives-modal" :class="{'objectives-modal-open' : isObjectivesOpen}" >
      <button type="button" id="modal-objectives-back" class="button" @click="closeObjectives()"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>
      <div id="objectives-modal-items">
        <h2 id="objectives-title-modal">OBJETIVOS</h2>

        <div id="objective-2" class="objective objective-normal">
          <div id="objective-icon-2" class="objective-icon-status objective-status-normal">
            <font-awesome-icon :icon="['fas', 'burger']" class="objective-icon"/>
          </div>
          <div class="objective-info">
            <div class="objective-title">Peça um hambúrguer <b>DUPLO CHEDDAR</b></div>
            <div class="objective-additional"><b>Com batata frita extra</b></div>
          </div>
        </div>

        <div id="objective-7" class="objective objective-normal">
          <div id="objective-icon-7" class="objective-icon-status objective-status-normal">
            <font-awesome-icon :icon="['fas', 'hotdog']" class="objective-icon"/>
          </div>
          <div class="objective-info">
            <div class="objective-title">Peça um hotdog <b>DOG SIMPLES</b></div>
            <div class="objective-additional"><b>Sem molho</b></div>
          </div>
        </div>

        <div id="objective-16" class="objective objective-normal">
          <div id="objective-icon-16" class="objective-icon-status objective-status-normal">
            <font-awesome-icon :icon="['fas', 'bottle-water']" class="objective-icon"/>
          </div>
          <div class="objective-info">
            <div class="objective-title">Peça uma <b>ÁGUA SEM GÁS</b></div>
          </div>
        </div>

        <div id="objectives-information" :class="{'objectives-information-show' : hasObjectiveInformation, 'objectives-information-text-done' : objectivesDone}">
          <font-awesome-icon :icon="['fas', 'circle-question']" id="objectives-information-icon" v-if="!objectivesDone"/>
          <font-awesome-icon :icon="['fas', 'circle-check']" id="objectives-information-icon-done" v-else/>
          <span id="objectives-information-text" v-html="objectivesInformation"></span>
        </div>
      </div>
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
      <div id="cart-back-mobile" v-else><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
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
                <li v-for="addItem in this.cartList[index].additional.add" :key="addItem.id"><div class="cart-item-add-name">{{'+ ' + addItem.name.replace('extra','') }}</div><div class="cart-item-add-price">{{'R$' + addItem.price + ',00'}}</div></li>
              </ul>
            </div>
            <div class="cart-item-total" v-if="this.cartList[index].additional.add.length">Total do item:<div class="cart-item-total-price">{{'R$' + this.cartList[index].totalPrice + ',00'}}</div></div>
            <div  class="cart-item-actions">
              <button type="button" class="cart-item-button cart-item-edit" @click="editItem(index)"><font-awesome-icon :icon="['fas', 'pen-to-square']" /> Editar</button>
              <button type="button" class="cart-item-button cart-item-remove" @click="removeItem(index)"><font-awesome-icon :icon="['fas', 'trash-can']" /> Remover</button>
            </div>
          </div>
        </div>
      </div>
      <div id="cart-info">
        <div id="cart-total-price">TOTAL: {{'R$' + this.totalPrice + ',00'}}</div>
        <button type="button" id="finish-order" class="button" @click="finishOrder()" :disabled="isFinishingOrder">FINALIZAR PEDIDO</button>
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
  @import "../assets/css/l2/big.scss";
  @import "../assets/css/l2/medium.scss";
  @import "../assets/css/l2/small.scss";
</style>