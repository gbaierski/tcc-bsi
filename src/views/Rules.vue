<script>
export default {
  methods: {
    scrollToTop() {
        window.scrollTo({
            top: 0,
        });
    },

    randomRedirect() {
        const routes = ['objectivesL1', 'objectivesL2'];
        const randomRoute = routes[Math.floor(Math.random() * routes.length)];

        this.scrollToTop();
        this.$router.push({ name: randomRoute });
    }
  },
};
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">

        <RouterLink to="objectives"  @click="scrollToTop" style="align-self: flex-start; margin: 30px 0px 30px 5%;">
            <button id="back-button"><font-awesome-icon :icon="['fas', 'caret-left']" /> VOLTAR</button>
        </RouterLink>
        <div id="rules-container">
            <div class="rules-box red-box">
                <div class="rules-header red">Regras:</div>
                <ul class="rules-list">
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'people-arrows']" /> Não dê informações para pessoas que ainda não fizeram o teste</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'bell-slash']" /> Faça o teste em um momento que você não será interrompido</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'thumbs-up']" /> Seja honesto ao utilizar e ao avaliar os layouts</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'truck-medical']" /> Não é permitido receber ajuda de outra pessoa durante o teste. (É permitido apenas para entender os objetivos)</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'rotate']" /> Evite atualizar a página ou utilizar comandos "voltar" do navegador</li>
                </ul>
            </div>
            <div class="rules-box gray-box">
                <div class="rules-header gray">Informações:</div> 
                <ul class="rules-list">
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'mobile-screen-button']" /> Faça o teste pelo celular</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'person-circle-minus']" /> Não serão solicitadas informações pessoais ao final do teste</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'stopwatch']" /> A duração do teste é relativa para cada participante, mas o tempo estimado é de 4 minutos</li>
                    <li class="rule"><font-awesome-icon class="icon" :icon="['fas', 'circle-info']" /> Mais informações sobre o objetivo desse trabalho estarão no final do teste</li>
                </ul>
            </div>
        </div>

        <p>Ao clicar no botão <b>PROSSEGUIR</b> você será redirecionado para uma tela que mostrará os objetivos do primeiro protótipo.</p>

        
        <button id="next-button" @click="randomRedirect">PROSSEGUIR <font-awesome-icon :icon="['fas', 'caret-right']" /></button>
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
        margin: 30px;
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
        align-self: center;  
        margin: 0px 0px 100px 0px;
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

    #rules-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .gray {
        background-color: $gray;
    }

    .gray-box {
        background-color: #e4e4e4;
    }

    .red {
        background-color: #911c36;
    }

    .red-box {
        background-color: #f1cbcf;
    }

    .rules-box {
        width: 20rem;
        border-radius: 10px;
    }

    .rules-header {
        width: 100%;
        height: 3rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 0px 0px;
        font-family: 'Montserrat', sans-serif;
        color: $main;
    }

    .rules-list {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    .rule {
        padding: 10px 15px 10px 15px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }

    .icon {
        font-size: 1.2rem;
    }

    .image {
        width: 18rem;
    }
</style>
