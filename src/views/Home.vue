<script>
</script>

<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">
        <h1>Trabalho de conclusão de curso</h1>
        <h3>Bacharelado em Sistemas de Informação</h3>
        <img src="../assets/img/storyset/thesis.png" alt="Hello" class="image">
        <h4>Aluno: Gustavo José Baierski</h4>
        <h4>Orientador: Eduardo da Silva</h4>
        <RouterLink to="welcome" style="align-self: center;  margin: 20px 0px 50px 0px;">
            <button id="next-button">PROSSEGUIR <font-awesome-icon :icon="['fas', 'caret-right']" /></button>
        </RouterLink>
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
        width: 90%;
        margin: 25px 0px 0px 0px;
        font-size: 35px;
        font-family: "Source Sans Pro", sans-serif;
        text-align: center;
    }

    h2 {
        width: 90%;
        font-size: 22.5px;
        font-family: "Source Sans Pro", sans-serif;
    }

    h3 {
        font-size: 17px;
        font-family: "Source Sans Pro", sans-serif;
    }

    h4 {
        margin: 10px 0px 0px 0px;
        font-size: 15px;
        font-family: "Source Sans Pro", sans-serif;
    }


    p {
        width: 90%;
        text-indent: 30px;
        font-size: 16px;
        font-family: "Source Sans Pro", sans-serif;
    }

    #next-button {
        padding: 25px 85px 25px 85px;
        border: none;
        letter-spacing: 1px;
        border-radius: 10px;
        background-color: #b0bec5;
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