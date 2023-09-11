<script>
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">

        <RouterLink to="welcome" style="align-self: flex-start; margin: 30px 0px 30px 5%;">
            <button id="back-button"><font-awesome-icon :icon="['fas', 'caret-left']" /> VOLTAR</button>
        </RouterLink>
        <p>Ao clicar no botão <span>INICIAR</span> você será redirecionado para uma tela que explicará brevemente os objetivos do primeiro protótipo.</p>
        <p><b>Por favor, peço que as regras listadas abaixo sejam lidas com atenção.</b></p>
        <div id="rules-container">
            <div class="rules-box">
                <div class="rules-header">Informações:</div> 
            </div>
        </div>
        <div id="rules-container">
            <div class="rules-box">
                <div class="rules-header">Regras:</div> 
            </div>
        </div>
        <RouterLink to="l1"><button id="start-button">INICIAR</button></RouterLink>
    </main>
</template>
<style lang="scss" scoped>
    @import "../assets/css/colors.scss";
    @import "../assets/css/main.scss";

    body {
        background-color: $contrast;
    }

    main {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        font-size: 40px;
        font-family: "Source Sans Pro", sans-serif;
    }

    p {
        font-family: "Source Sans Pro", sans-serif;
    }

    #back-button {
        padding: 12.5px 42.5px 12.5px 42.5px;
        border: none;
        letter-spacing: 1px;
        border-radius: 5px;
        background-color: #b0bec5;
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

    #start-button {
        padding: 25px 85px 25px 85px;
        border: none;
        letter-spacing: 1px;
        border-radius: 10px;
        background-color: #24ad5d;
        font-family: 'Montserrat', sans-serif;
        color: $main;
        word-spacing: 2px;
        transition: all 0.2s;
        font-weight: bold;
    }

    #start-button:hover {
        background-color: #1e944f;
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
        cursor: pointer;
    }

    .image {
        width: 18rem;
    }
</style>
