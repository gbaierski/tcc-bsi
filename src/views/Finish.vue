<script>
import { useDataStore } from '@/stores/dataStore';

export default {
    methods: {
        about() {
            this.$router.push({ name: 'about' });
        }
    },
    created() {
        var dataStore = useDataStore();
        dataStore.loadFromLocalStorage();
        
        if(dataStore.layout1.stepCount || dataStore.layout2.stepCount) {
            localStorage.clear();
            location.reload();
            console.log('reload!');
        }
    }
}
</script>
<template>
    <div id="finish-screen">
      <font-awesome-icon :icon="['fas', 'circle-check']" id="finish-screen-icon"/>
      MUITO OBRIGADO! :)
      <span id="finish-screen-text">O teste foi finalizado, mas se você deseja entender melhor o objetivo do trabalho, clique no botão abaixo:</span>
      <button id="more-button" @click="about">SABER MAIS</button>
    </div>
</template>
<style lang="scss" scoped>
    @import "../assets/css/colors.scss";
    @import "../assets/css/main.scss";

    #finish-screen {
        position: fixed;
        width: calc(100vw - 40px);
        height: calc(100vh - 40px);
        padding: 20px;
        top: 0px;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: rgb(23, 172, 135);
        color: $main;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 25px;
        transition: all .2s;
        text-align: center;
    }

    #finish-screen-icon {
        width: 75px;
        height: 75px;
    }

    #finish-screen-text {
        font-size: 18px;
    }

    #more-button {
        padding: 25px 85px 25px 85px;
        margin: 30px 0px 50px 0px;
        border: none;
        letter-spacing: 1px;
        border-radius: 10px;
        background-color: $main;
        font-family: 'Montserrat', sans-serif;
        color: $dark;
        word-spacing: 2px;
        transition: all 0.2s;
        font-weight: bold;
    }

    #more-button:hover {
        background-color: $main;
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
        cursor: pointer;
    }
</style>