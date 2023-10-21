<script>
import { useDataStore } from '@/stores/dataStore';

export default {
    data() {
        return {
            // Dados obtidos:
            age: '',
            worksWithIT: null,
            cartPreference: null,
            additionalPreference: null,
            itemDescriptionPreference: null,
            deleteModalPreference: null,

            // Validações:
            selectedAge: null,

            // Variáveis:
            ages: [
                {id: 1, value: '<= 18', text: '18 anos ou menos'},
                {id: 2, value: '19 - 33', text: '19 anos - 33 anos'},
                {id: 3, value: '34 - 54', text: '34 anos - 54 anos'},
                {id: 4, value: '>= 55', text: '55 anos ou mais'},
            ]
        }
    },
    methods: {
        selectAge(age) {
            this.selectedAge = age;
            this.age = this.ages.find(item => item.id === age)?.value ?? null;
        },

        selectWorksWithIT(value) {
            this.worksWithIT = value;
        },

        selectPreference(item, value) {
            const preferenceMap = {
                cartPreference: this.cartPreference,
                additionalPreference: this.additionalPreference,
                itemDescriptionPreference: this.itemDescriptionPreference,
                deleteModalPreference: this.deleteModalPreference,
            };

            if (preferenceMap.hasOwnProperty(item)) {
                this[item] = value;
            }
        },

        selectDeleteModalPreference(value) {
            this.deleteModalPreference = value;
        },

        finish() {
            console.log("Faixa etária: " + this.age);
            console.log("Trabalha com TI: " + this.worksWithIT);
            console.log("Preferência carrinho: " + this.cartPreference);
            console.log("Preferência adicionais: " + this.additionalPreference);
            console.log("Preferência descrição do item: " + this.itemDescriptionPreference);
            console.log("Prefere modal de exclusão: " + this.deleteModalPreference);

            const dataStore = useDataStore();
            dataStore.loadFromLocalStorage();

            console.log(dataStore.layout1)
            console.log(dataStore.layout2)

            // Lógica para enviar para a Firebase
        }
    }
}
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <img src="../assets/img/logo_ifc.png" alt="Hello" id="image-banner">

        <div id="quiz-items">
            <h2 id="quiz-title">QUESTIONÁRIO FINAL:</h2>
            <div id="quiz-questions">
                <div class="quiz-question">
                    <div class="quiz-text">1. Qual sua faixa etária?</div>
                    <div id="quiz-age-options">
                        <div :class="['quiz-age-option', { 'quiz-age-selected': selectedAge == age.id }]" v-for="age in this.ages" :key="age.id" @click="selectAge(age.id)">
                            {{ age.text }} <font-awesome-icon :icon="['fas', 'circle-check']" :class="['quiz-age-icon', { 'quiz-age-icon-selected': selectedAge == age.id }]"/>
                        </div>
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-text">2. Você atua ou estuda na área de Tecnologia da Informação?</div>
                    <div id="quiz-buttons-options">
                        <button type="button" :class="['quiz-button', { 'quiz-button-yes-selected': worksWithIT}]" @click="selectWorksWithIT(true)">SIM</button>
                        <button type="button" :class="['quiz-button', { 'quiz-button-no-selected': worksWithIT === false}]" @click="selectWorksWithIT(false)">NÃO</button>
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-text">3. Qual layout você prefere?</div>
                    <div class="quiz-options">
                        <img src="../assets/img/quiz/q3_2.jpg" :class="['quiz-option', { 'quiz-option-selected': cartPreference === 2}]" @click="selectPreference('cartPreference', 2)">
                        <img src="../assets/img/quiz/q3_1.jpg" :class="['quiz-option', { 'quiz-option-selected': cartPreference === 1}]" @click="selectPreference('cartPreference', 1)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-text">4. Qual layout você prefere?</div>
                    <div class="quiz-options">
                         <img src="../assets/img/quiz/q4_1.jpg" :class="['quiz-option', { 'quiz-option-selected': additionalPreference === 1}]" @click="selectPreference('additionalPreference', 1)">
                         <img src="../assets/img/quiz/q4_2.jpg" :class="['quiz-option', { 'quiz-option-selected': additionalPreference === 2}]" @click="selectPreference('additionalPreference', 2)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-text">5. Qual layout você prefere?</div>
                    <div class="quiz-options">
                        <img src="../assets/img/quiz/q5_2.jpg" :class="['quiz-option', { 'quiz-option-selected': itemDescriptionPreference === 2}]" @click="selectPreference('itemDescriptionPreference', 2)">
                        <img src="../assets/img/quiz/q5_1.jpg" :class="['quiz-option', { 'quiz-option-selected': itemDescriptionPreference === 1}]" @click="selectPreference('itemDescriptionPreference', 1)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-text">6. Você prefere o sistema com ou sem alerta de confirmação na exclusão do item no carrinho?</div>
                    <img src="../assets/img/quiz/q6.jpg" class="quiz-option" id="quiz-delete-modal-image">
                    <div id="quiz-buttons-options">
                        <button type="button" :class="['quiz-button', { 'quiz-button-yes-selected': deleteModalPreference}]" @click="selectDeleteModalPreference(true)">COM ALERTA</button>
                        <button type="button" :class="['quiz-button', { 'quiz-button-no-selected': deleteModalPreference === false}]" @click="selectDeleteModalPreference(false)">SEM ALERTA</button>
                    </div>
                </div>
            </div>
        </div>
        <button id="finish-button" @click="finish()">FINALIZAR</button>
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

    #image-banner {
        width: 18rem;
    }

    #quiz-title {
        margin-top: 0px;
        letter-spacing: 1px;
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: lighter;
        font-family: "Source Sans Pro", sans-serif;
    }

    #quiz-items {
        width: 80%;
        padding: 20px;
        background-color: $contrast;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        gap: 20px;
    }

    #quiz-questions {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    #quiz-age-options {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    #quiz-buttons-options {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    #quiz-delete-modal-image {
        margin-bottom: 20px;
    }

    #finish-button {
        padding: 25px 85px 25px 85px;
        margin: 30px 0px 50px 0px;
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

    #finish-button:hover {
        background-color: #1e944f;
        transform: translateY(-3px);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
        cursor: pointer;
    }

    .quiz-question {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }

    .quiz-text {
        width: 300px;
        margin-bottom: 20px;
        text-align: left;
        font-family: "Source Sans Pro", sans-serif;
        color: $dark;
    }

    .quiz-age-option {
        width: calc(100% - 24px);
        border: solid 2px transparent;
        font-family: "Source Sans Pro", sans-serif;
        padding: 10px;
        border-radius: 5px;
        background-color: $main;
        display: flex;
        justify-content: space-between;
        transition: all .2s;
    }

    .quiz-age-selected {
        border: solid 2px rgb(23, 172, 135) !important;
    }

    .quiz-age-icon {
        width: 20px;
        height: 20px;
        color: transparent;
        transition: all .2s;
    }

    .quiz-age-icon-selected {
        color: rgb(23, 172, 135) !important;
    }

    .quiz-button {
        padding: 15px 30px 15px 30px;
        border-radius: 5px;
        border: none;
        background-color: $gray;
        color: $main;
        transition: all .2s;
    }

    .quiz-button-yes-selected {
        transform: translateY(-2px);
        background-color: rgb(23, 172, 135) !important;
    }

    .quiz-button-no-selected {
        transform: translateY(-2px);
        background-color: rgb(138, 41, 66) !important;
    }

    .quiz-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .quiz-option {
        width: 270px;
        height: 202.5px;
        border-radius: 10px;
        background-color: $gray;
        border: solid 3px transparent !important;
        transition: all .2s;
    }

    .quiz-option-selected {
        border: solid 3px rgb(23, 172, 135) !important;
    }

    @media screen and (min-width: 641px) and (max-width:1007px) {

        #quiz-age-options {
            width: 60%;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }

    @media screen and (min-width:1008px) {

         #quiz-items {
            width: 60%;
        }

        #quiz-age-options {
            width: 45%;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .quiz-options {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;
        }
    }
</style>
