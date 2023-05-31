<script>
export default {
  data() {
    return {
      imagesPath: "src/assets/img/itens/",
      menu: {
        hamburgers: [
          {
            id: 1,
            name: "Salada",
            description: "Pão cervejinha, 1x hambúrguer de 180g de costela, 1,5x queijo mussarela, maionese, molho especial, alface, tomate, cebola roxa e picles. Acompanha ketchup e molho especial separadamente.",
            price: "R$20,00",
            image: "salada.jpg"
          },
          {
            id: 2,
            name: "Duplo Cheddar",
            description: "Pão brioche, 2x hambúrguer de 180g de costela, 3 camadas de queijo cheddar, maionese, bacon picadinho. Acompanha ketchup separadamente.",
            price: "R$32,00",
            image: "duploCheddar.jpg"
          },
          {
            id: 3,
            name: "Simples",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, 1x queijo mussarela, maionese, molho especial, alface e tomate.",
            price: "R$15,00",
            image: "simples.jpg"
          },
          {
            id: 4,
            name: "Bersk's Burger",
            description: "Pão brioche, 2x hambúrgueres de 180g de costela, 3 camadas de queijo mussarela, barbecue, maionese, molho especial, alface americana, tomate, cebola picadinha e picles. Acompanha ketchup, barbecue, molho especial e uma porção de batata com cheddar e bacon separadamente.",
            price: "R$70,00",
            image: "bersk.jpg"
          },
          {
            id: 5,
            name: "Intense Burger",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo gorgonzola, cebola roxa crispy, 2x tiras de bacon, molho especial. Acompanha molho especial separadamente.",
            price: "R$29,00",
            image: "intense.jpg"
          },
          {
            id: 6,
            name: "Flipicante",
            description: "Pão australiano, 1x hambúrguer de 200g de linguiça blumenau, queijo gorgonzola e queijo coalho, geléia de pimenta, molho especial, alface e cebola roxa chapeada. Acompanha ketchup, barbecue e molho especial separadamente.",
            price: "R$41,00",
            image: "flipicante.jpg"
          },
          {
            id: 7,
            name: "Queso Caliente",
            description: "Pão brioche, 1x hambúrguer de 150g de costela, queijo empanado, geléia de pimenta, rúcula e tomate. Acompanha molho especial separadamente.",
            price: "R$49,00",
            image: "queso.jpg"
          }
        ],
        hotdogs: [
          {
            id: 8,
            name: "Dog Simples",
            description: "Pão 25cm, salsicha, maionese, ketchup e mostarda. Acompanha ketchup e maionese separadamente.",
            price: "R$20,00",
            image: "dogsimples.jpg"
          },
          {
            id: 9,
            name: "Dog Cheddar Bacon",
            description: "Pão 25cm, salsicha, maionese, ketchup, cheddar derretido e bacon picadinho. Acompanha ketchup e maionese separadamente.",
            price: "R$26,00",
            image: "dogCheddar.jpg"
          },
          {
            id: 10,
            name: "Chickão",
            description: "Pão 35cm, 4x salsichas, maionese, ketchup, milho, bacon picadinho, frango desfiado, calabresa e molho verde. Acompanha ketchup e maionese separadamente.",
            price: "R$40,00",
            image: "chickao.jpg"
          }
        ],
        servings: [
          {
            id: 11,
            name: "Fritas Simples",
            description: "400g de batata frita, muito cheddar, 100g de bacon.",
            price: "R$25,00",
            image: "fritasSimples.jpg"
          },
          {
            id: 12,
            name: "O Comilão",
            description: "1 kg de batata frita, muito cheddar, 500g de coração de galinha, 500g de frango chapeado, 350g bacon em tiras, 500g de linguiça calabresa, 500g de picanha fatiada. Acompanha salada. Acompanha ketchup e maionese separadamente.",
            price: "R$220,00",
            image: "oComilao.jpg"
          },
          {
            id: 13,
            name: "Chicken Nuggets",
            description: "500g de nuggets de frango. Acompanha Ketchup e a maionese especial.",
            price: "R$30,00",
            image: "nuggets.jpg"
          }
        ],
        juices: [
          {
            id: 14,
            name: "Laranja",
            description: "600ml de suco de laranja natural.",
            price: "R$10,00",
            image: "sucoLaranja.jpg"
          },
          {
            id: 15,
            name: "Uva",
            description: "600ml de suco de uva natural.",
            price: "R$10,00",
            image: "sucoUva.jpg"
          },
          {
            id: 16,
            name: "Abacaxi com Hortelã",
            description: "600ml de suco de abacaxi com hortelã.",
            price: "R$10,00",
            image: "sucoAbacaxi.jpg"
          },
          {
            id: 17,
            name: "Limonada",
            description: "400ml de limonada.",
            price: "R$10,00",
            image: "sucoLimonada.jpg"
          }
        ],
        otherDrinks: [
          {
            id: 18,
            name: "Refrigerante",
            description: "Refrigerante 2L.",
            price: "R$14,00",
            image: "refrigerante.jpg"
          },
          {
            id: 19,
            name: "Água com/sem gás",
            description: "700ml de água com ou sem gás.",
            price: "R$4,00",
            image: "agua.jpg"
          },
          {
            id: 20,
            name: "Caipirinha de vinho",
            description: "400ml de caipirinha de vinho.",
            price: "R$14,00",
            image: "caipirinhaVinho.jpg"
          }
        ],
        desserts: [
          {
            id: 21,
            name: "Coração Mole",
            description: "Bolo de chocolate utilizando leite condensado, cacau em pó e granulado. Serve 2 pessoas.",
            price: "R$30,00",
            image: "coracaoMole.jpg"
          },
          {
            id: 22,
            name: "Casquinha",
            description: "Casquinha de sorvete de baunilha com cobertura de chocolate.",
            price: "R$7,00",
            image: "casquinha.jpg"
          },
          {
            id: 22,
            name: "Bersk's Mix",
            description: "Pote de 1L de sorvete de baunilha com cobertura de chocolate e pedaços de chocolate. Serve de 2 à 4 pessoas.",
            price: "R$18,00",
            image: "bersksMix.jpg"
          }
        ],
      }
    }
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
        <div id="place-image"></div>
        <div id="place-name">Baierski Burger</div>
        <div id="place-address" class="place-info-box">
          <font-awesome-icon :icon="['fass', 'location-dot']" /> 
          <div id="address-info">Rua de Teste - 296, Floresta, Joinville, SC</div>
        </div>
        <div id="place-operation">Estabelecimento aberto</div>
        <div id="place-time" class="place-info-box">
          <font-awesome-icon :icon="['fass', 'clock']" />
          <div id="time-info">25 min - 45 min</div>
        </div>
    </section>
  </header>
  <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="azure" fill-opacity="1" d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,80C420,64,480,64,540,101.3C600,139,660,213,720,240C780,267,840,245,900,245.3C960,245,1020,267,1080,250.7C1140,235,1200,181,1260,176C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
  <section id="navegation">
    <p class="navegation-item">Hambúrgueres</p>
    <p class="navegation-item">Hotdogs</p>
    <p class="navegation-item">Porções</p>
    <p class="navegation-item">Sucos</p>
    <p class="navegation-item">Outras bebidas</p>
    <p class="navegation-item">Sobremesas</p>
  </section>
  <section id="menu-itens">

    <h2 class="menu-category">Hambúrgueres</h2>
    <div class="menu-item" v-for="hamburger in menu.hamburgers" :key="hamburger.id">
      <div class="item-information">
        <h3 class="item-name">{{ hamburger.name }}</h3>
        <div class="item-description">{{ hamburger.description }}</div>
        <div class="item-price">{{ hamburger.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + hamburger.image">
    </div>

    <h2 class="menu-category">Hotdogs</h2>
    <div class="menu-item" v-for="hotdog in menu.hotdogs" :key="hotdog.id">
      <div class="item-information">
        <h3 class="item-name">{{ hotdog.name }}</h3>
        <div class="item-description">{{ hotdog.description }}</div>
        <div class="item-price">{{ hotdog.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + hotdog.image">
    </div>

    <h2 class="menu-category">Porções</h2>
    <div class="menu-item" v-for="serving in menu.servings" :key="serving.id">
      <div class="item-information">
        <h3 class="item-name">{{ serving.name }}</h3>
        <div class="item-description">{{ serving.description }}</div>
        <div class="item-price">{{ serving.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + serving.image">
    </div>

    <h2 class="menu-category">Sucos</h2>
    <div class="menu-item" v-for="juice in menu.juices" :key="juice.id">
      <div class="item-information">
        <h3 class="item-name">{{ juice.name }}</h3>
        <div class="item-description">{{ juice.description }}</div>
        <div class="item-price">{{ juice.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + juice.image">
    </div>

    <h2 class="menu-category">Outras bebidas</h2>
    <div class="menu-item" v-for="otherDrink in menu.otherDrinks" :key="otherDrink.id">
      <div class="item-information">
        <h3 class="item-name">{{ otherDrink.name }}</h3>
        <div class="item-description">{{ otherDrink.description }}</div>
        <div class="item-price">{{ otherDrink.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + otherDrink.image">
    </div>

    <h2 class="menu-category">Sobremesas</h2>
    <div class="menu-item" v-for="dessert in menu.desserts" :key="dessert.id">
      <div class="item-information">
        <h3 class="item-name">{{ dessert.name }}</h3>
        <div class="item-description">{{ dessert.description }}</div>
        <div class="item-price">{{ dessert.price }}</div>
      </div>
      <img class="item-image" :src="imagesPath + dessert.image">
    </div>

  </section>
</template>

<style lang="scss">

// SCSS Variables
$positive: rgb(66, 218, 104);
$negative: rgb(255, 38, 0);
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
  background-color: $main;
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

#wave {
  width: 100%;
  height: 300px;
  position: absolute;
  transform: translateY(-300px);
}

#navegation {
  width: 100%;
  height: 70px;
  background-color: $main;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px, rgba(0, 0, 0, 0.01) 0px 10px 10px -5px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

#menu-itens {
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

.navegation-item {
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  color: $complementary;
  transition: all 0.2s;
}

.navegation-item:hover {
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
  background-color: $complementary;
}
</style>
