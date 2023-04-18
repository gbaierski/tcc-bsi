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
        <div id="place-name">Baierski Burger & Beer</div>
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
    <p class="navegation-item">Refrigerantes</p>
    <p class="navegation-item">Sucos</p>
    <p class="navegation-item">Cervejas</p>
    <p class="navegation-item">Outras bebidas</p>
    <p class="navegation-item">Sobremesas</p>
  </section>
  <section id="menu-itens">

    <h2 class="menu-category">Hambúrgueres</h2>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Salada</h3>
        <div class="item-description">Pão cervejinha, 1x hambúrguer de 180g de costela, 1,5x queijo mussarela, maionese, molho especial, alface, tomate, cebola roxa e picles. Acompanha ketchup e molho especial separadamente.</div>
        <div class="item-price">R$20,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/salada.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Duplo Cheddar</h3>
        <div class="item-description">Pão brioche, 2x hambúrguer de 180g de costela, 3 camadas de queijo cheddar, maionese, bacon picadinho. Acompanha ketchup separadamente.</div>
        <div class="item-price">R$32,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/duploCheddar.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Simples</h3>
        <div class="item-description">Pão brioche, 1x hambúrguer de 150g de costela, 1x queijo mussarela, maionese, molho especial, alface e tomate.</div>
        <div class="item-price">R$15,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/simples.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Bersk's Burger</h3>
        <div class="item-description">Pão brioche, 2x hambúrgueres de 180g de costela, 3 camadas de queijo mussarela, barbecue, maionese, molho especial, alface americana, tomate, cebola picadinha e picles. Acompanha ketchup, barbecue, molho especial e uma porção de batata com cheddar e bacon separadamente.</div>
        <div class="item-price">R$70,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/bersk.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Intense Burger</h3>
        <div class="item-description">Pão brioche, 1x hambúrguer de 150g de costela, queijo gorgonzola, cebola roxa crispy, 2x tiras de bacon, molho especial. Acompanha molho especial separadamente.</div>
        <div class="item-price">R$29,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/intense.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Flipicante</h3>
        <div class="item-description">Pão australiano, 1x hambúrguer de 200g de linguiça blumenau, queijo gorgonzola e queijo coalho, geléia de pimenta, molho especial, alface e cebola roxa chapeada. Acompanha ketchup, barbecue e molho especial separadamente.</div>
        <div class="item-price">R$41,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/flipicante.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Queso Caliente</h3>
        <div class="item-description">Pão brioche, 1x hambúrguer de 150g de costela, queijo empanado, geléia de pimenta, rúcula e tomate. Acompanha molho especial separadamente.</div>
        <div class="item-price">R$49,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/queso.jpg">
    </div>

    <h2 class="menu-category">Hotdogs</h2>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Dog Simples</h3>
        <div class="item-description">Pão 25cm, salsicha, maionese, ketchup e mostarda. Acompanha ketchup e maionese separadamente.</div>
        <div class="item-price">R$20,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/dogsimples.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Dog Cheddar Bacon</h3>
        <div class="item-description">Pão 25cm, salsicha, maionese, ketchup, cheddar derretido e bacon picadinho. Acompanha ketchup e maionese separadamente.</div>
        <div class="item-price">R$26,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/dogcheddar.jpg">
    </div>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Chickão</h3>
        <div class="item-description">Pão 35cm, 4x salsichas, maionese, ketchup, milho, bacon picadinho, frango desfiado, calabresa e molho verde. Acompanha ketchup e maionese separadamente.</div>
        <div class="item-price">R$40,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/chickao.jpg">
    </div>

    <h2 class="menu-category">Porções</h2>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">O Comilão</h3>
        <div class="item-description">1 kg de batata frita, muito cheddar, 500g de coração de galinha, 500g de frango chapeado, 350g bacon em tiras, 500g de linguiça calabresa, 500g de picanha fatiada. Acompanha salada. Acompanha ketchup e maionese separadamente.</div>
        <div class="item-price">R$220,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/ocomilao.jpg">
    </div>

    <h2 class="menu-category">Sobremesas</h2>
    <div class="menu-item">
      <div class="item-information">
        <h3 class="item-name">Coração Mole</h3>
        <div class="item-description">Bolo de chocolate utilizando Leite Moça Nestlé, Cacau em pó e granulado. Serve 2 pessoas.</div>
        <div class="item-price">R$30,00</div>
      </div>
      <img class="item-image" src="../assets/img/itens/coracaoMole.jpg">
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
