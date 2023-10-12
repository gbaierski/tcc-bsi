<script>
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" class="image">

        <div id="objectives-items">
            <h2 id="objectives-title">PEDIDO:</h2>
            <div class="objective objective-normal">
            <div class="objective-icon-status objective-status-normal" style="background-color: orange">
                <font-awesome-icon :icon="['fas', 'burger']" class="objective-icon"/>
            </div>
            <div class="objective-info">
                <div class="objective-title">Peça um hambúrguer <b>DUPLO CHEDDAR</b></div>
                <div class="objective-additional add"><b>Com batata frita extra</b></div>
            </div>
            </div>

            <div class="objective objective-normal">
            <div class="objective-icon-status objective-status-normal" style="background-color: red">
                <font-awesome-icon :icon="['fas', 'hotdog']" class="objective-icon"/>
            </div>
            <div class="objective-info">
                <div class="objective-title">Peça um hotdog <b>DOG SIMPLES</b></div>
                <div class="objective-additional rem"><b>Sem molho</b></div>
            </div>
            </div>

                    <div class="objective objective-normal">
            <div class="objective-icon-status objective-status-normal" style="background-color: blue">
                <font-awesome-icon :icon="['fas', 'bottle-water']" class="objective-icon"/>
            </div>
            <div class="objective-info">
                <div class="objective-title">Peça uma <b>ÁGUA SEM GÁS</b></div>
            </div>
            </div>
        </div>
        
        <RouterLink to="l2" @click="scrollToTop" style="margin: 30px 0px 50px 0px;"><button id="start-button">INICIAR</button></RouterLink>
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

    #objectives-title {
        margin-top: 0px;
        letter-spacing: 1px;
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: lighter;
        font-family: "Source Sans Pro", sans-serif;
    }

    #objectives-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        gap: 20px;
    }

    .image {
        width: 18rem;
    }

    .objective-normal {
        background-color: #b0bec55e;
    }

    .objective-done {
        background-color: #2fd5744d;
    }

    .objective-wrong {
        background-color: #ff485771;
    }

    .objective-status-normal {
        background-color: $gray;
    }

    .objective-status-done {
        background-color: $positive;
    }

    .objective-status-wrong {
        background-color: $negative;
    }

    .objective {
        width: 80%;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        gap: 10px;
    }

    .objective-icon-status {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .objective-icon {
        width: 50px;
        height: 50px;
        padding: 25px;
        color: $main;
    }

    .objective-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    .objective-title {
        font-family: "Source Sans Pro", sans-serif;
        text-align: center;
    }

    .objective-additional {
        text-align: center;
        font-family: "Source Sans Pro", sans-serif;
    }

    .add {
        color: #24ad5d;
    }

    .rem {
        color: #b1151d;
    }
</style>
