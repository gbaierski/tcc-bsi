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
  transform: translateY(-250px);
}

#navegation {
  width: 100%;
  height: 70px;
  background-color: $main;
  transform: translateY(-255px);
  box-shadow: rgba(0, 0, 0, 0.01) 0px 20px 25px -5px, rgba(0, 0, 0, 0.01) 0px 10px 10px -5px;
  display: flex;
  justify-content: center;
  gap: 50px;
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
</style>
