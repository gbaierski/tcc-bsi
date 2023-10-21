<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>

<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">

        <RouterLink to="/"  @click="scrollToTop" style="align-self: flex-start; margin: 30px 0px 30px 5%;">
            <button id="back-button"><font-awesome-icon :icon="['fas', 'caret-left']" /> VOLTAR</button>
        </RouterLink>

        <h2>Objetivo do teste:</h2>

        <p>Este trabalho tem como objetivo final melhorar a usabilidade dos usuários em sistemas web de delivery por meio da análise de dados coletados durante o teste.</p>

        <img src="../assets/img/storyset/uxdesign.png" alt="Hello" class="image">

        <h2>Como o teste funciona?</h2>
        <p>Serão apresentados 2 protótipos de sistemas de delivery com objetivos a serem cumpridos. Por exemplo "Peça um duplo bacon" ou "Peça um salada sem cebola". Os objetivos sempre estarão disponíveis para visualização no canto superior esquerdo, para evitar que você se esqueça:</p>

        <p>Quando os objetivos forem cumpridos, eles serão atualizados na lista de objetivos:</p>

        <p>Quando todos os objetivos forem cumpridos, o pedido poderá ser encerrado. Para isso, acesse o botão <span>FINALIZAR PEDIDO</span> no carrinho:</p>

        <p>Após finalizar o teste no primeiro protótipo, você deverá realizar outro pedido no segundo protótipo. A ideia é a mesma, porém os objetivos serão diferentes.</p>
        <RouterLink to="rules"  @click="scrollToTop" style="align-self: center;  margin: 30px 0px 100px 0px;">
            <button id="next-button">PROSSEGUIR <font-awesome-icon :icon="['fas', 'caret-right']" /></button>
        </RouterLink>
    </main>
</template>

<style lang="scss" scoped>
    @import "../assets/css/colors.scss";
    @import "../assets/css/main.scss";

    main {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        width: 90%;
        font-size: 22.5px;
        font-family: "Source Sans Pro", sans-serif;
    }

    p {
        width: 90%;
        text-indent: 30px;
        font-size: 16px;
        font-family: "Source Sans Pro", sans-serif;
    }

    #back-button {
        padding: 12.5px 42.5px 12.5px 42.5px;
        border: none;
        letter-spacing: 1px;
        border-radius: 5px;
        background-color: $gray;
        font-family: 'Montserrat', sans-serif;
        color: $main;
        word-spacing: 2px;
        transition: all 0.2s;
        font-weight: bold;
    }

    #back-button:hover {
        background-color: #8e979c;
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
        cursor: pointer;
    }

    #next-button {
        padding: 25px 85px 25px 85px;
        border: none;
        letter-spacing: 1px;
        border-radius: 10px;
        background-color: $gray;
        font-family: 'Montserrat', sans-serif;
        color: $main;
        word-spacing: 2px;
        transition: all 0.2s;
        font-weight: bold;
    }

    #next-button:hover {
        background-color: #8e979c;
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
        cursor: pointer;
    }

    .image {
        width: 18rem;
    }
</style>