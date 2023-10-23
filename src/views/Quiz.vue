<script>
import { useDataStore } from '@/stores/dataStore';

export default {
    data() {
        return {
            // Dados obtidos:
            age: null,
            worksWithIT: null,
            cartPreference: null,
            additionalPreference: null,
            itemDescriptionPreference: null,
            deleteModalPreference: null,

            // Validações:
            selectedAge: null,
            isAlertOpen: false,
            fieldsToValidate: [
                { field: 'age', ref: 'question-age' },
                { field: 'worksWithIT', ref: 'question-worksWithIT' },
                { field: 'cartPreference', ref: 'question-cartPreference' },
                { field: 'additionalPreference', ref: 'question-additionalPreference' },
                { field: 'itemDescriptionPreference', ref: 'question-itemDescriptionPreference' },
                { field: 'deleteModalPreference', ref: 'question-deleteModalPreference' },
            ],
            validationPerformed: false,

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
        scrollToTop() {
            window.scrollTo({
            top: 0,
            });
        },

        alert() {
            this.isAlertOpen = true;

            if (this.alertTimeout)
                clearTimeout(this.alertTimeout);

            this.alertTimeout = setTimeout(() => {
                this.isAlertOpen = false;
            }, 2000);
        },

        scrollTo(section) {
            this.$refs[section].scrollIntoView({ behavior: 'smooth', block: 'center' });
        },

        validateFields() {
            this.validationPerformed = true;
            let allValid = true;
            for (const fieldData of this.fieldsToValidate) {
                if (this[fieldData.field] === null) {
                    this.scrollTo(fieldData.ref);
                    allValid = false;
                    break;
                }
            }

            return allValid;
        },

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
            if (this.validateFields()) {
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
            } else {
                this.alert();
            }
        }
    },
    mounted() {
        this.scrollToTop();
    }
}
</script>
<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">
    <main>
        <div id="alert" :class="{ 'alert-open' : isAlertOpen}">
            <div id="alert-border"></div>
            <div id="alert-text">
                <font-awesome-icon :icon="['fas', 'circle-exclamation']" id="alert-icon"/>
                <div id="alert-message">Por favor, responda todas as perguntas!</div>
            </div>
        </div>
        <img src="../assets/img/logo_ifc.png" alt="Hello" id="image-banner">

        <div id="quiz-items">
            <h2 id="quiz-title">QUESTIONÁRIO FINAL:</h2>
            <div id="quiz-questions">
                <div class="quiz-question">
                    <div ref="question-age" :class="['quiz-text', { 'error-text': this.age === null && this.validationPerformed }]">
                        1. Qual sua faixa etária? <span v-if="this.age === null && this.validationPerformed">*</span>
                    </div>
                    <div id="quiz-age-options">
                        <div :class="['quiz-age-option', { 'quiz-age-selected': selectedAge == age.id }]" v-for="age in this.ages" :key="age.id" @click="selectAge(age.id)">
                            {{ age.text }} <font-awesome-icon :icon="['fas', 'circle-check']" :class="['quiz-age-icon', { 'quiz-age-icon-selected': selectedAge == age.id }]"/>
                        </div>
                    </div>
                </div>

                <div class="quiz-question">
                    <div ref="question-worksWithIT" :class="['quiz-text', { 'error-text': this.worksWithIT === null && this.validationPerformed }]">
                        2. Você atua ou estuda na área de Tecnologia da Informação? <span v-if="this.worksWithIT === null && this.validationPerformed">*</span>
                    </div>
                    <div id="quiz-buttons-options">
                        <button type="button" :class="['quiz-button', { 'quiz-button-yes-selected': worksWithIT}]" @click="selectWorksWithIT(true)">SIM</button>
                        <button type="button" :class="['quiz-button', { 'quiz-button-no-selected': worksWithIT === false}]" @click="selectWorksWithIT(false)">NÃO</button>
                    </div>
                </div>

                <div class="quiz-question">
                    <div ref="question-cartPreference" :class="['quiz-text', { 'error-text': this.cartPreference === null && this.validationPerformed }]">
                        3. Qual layout você prefere? <span v-if="this.cartPreference === null && this.validationPerformed">*</span>
                    </div>
                    <div class="quiz-options">
                        <img src="../assets/img/quiz/q3_2.jpg" :class="['quiz-option', { 'quiz-option-selected': cartPreference === 2}]" @click="selectPreference('cartPreference', 2)">
                        <img src="../assets/img/quiz/q3_1.jpg" :class="['quiz-option', { 'quiz-option-selected': cartPreference === 1}]" @click="selectPreference('cartPreference', 1)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div ref="question-additionalPreference" :class="['quiz-text', { 'error-text': this.additionalPreference === null && this.validationPerformed }]">
                        4. Qual layout você prefere? <span v-if="this.additionalPreference === null && this.validationPerformed">*</span>
                    </div>
                    <div class="quiz-options">
                         <img src="../assets/img/quiz/q4_1.jpg" :class="['quiz-option', { 'quiz-option-selected': additionalPreference === 1}]" @click="selectPreference('additionalPreference', 1)">
                         <img src="../assets/img/quiz/q4_2.jpg" :class="['quiz-option', { 'quiz-option-selected': additionalPreference === 2}]" @click="selectPreference('additionalPreference', 2)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div ref="question-itemDescriptionPreference" :class="['quiz-text', { 'error-text': this.itemDescriptionPreference === null && this.validationPerformed }]">
                        5. Qual layout você prefere? <span v-if="this.itemDescriptionPreference === null && this.validationPerformed">*</span>
                    </div>
                    <div class="quiz-options">
                        <img src="../assets/img/quiz/q5_2.jpg" :class="['quiz-option', { 'quiz-option-selected': itemDescriptionPreference === 2}]" @click="selectPreference('itemDescriptionPreference', 2)">
                        <img src="../assets/img/quiz/q5_1.jpg" :class="['quiz-option', { 'quiz-option-selected': itemDescriptionPreference === 1}]" @click="selectPreference('itemDescriptionPreference', 1)">
                    </div>
                </div>

                <div class="quiz-question">
                    <div ref="question-deleteModalPreference" :class="['quiz-text', { 'error-text': this.deleteModalPreference === null && this.validationPerformed }]">
                        6. Você prefere o sistema com ou sem alerta de confirmação na exclusão do item no carrinho? <span v-if="this.deleteModalPreference === null && this.validationPerformed">*</span>
                    </div>
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

    #alert {
        position: fixed;
        width: 250px;
        height: 80px;
        top: 20px;
        border-radius: 5px;
        z-index: 8;
        display: flex;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 5px;
        transform: translateY(-200px);
        opacity: 100%;
        transition: all .2s;
        background-color: #ffe0e3;
        color: $negative;
    }

    #alert-border {
        width: 10px;
        height: 100%;
        border-radius: 5px 0px 0px 5px;
        background-color: $negative;
    }

    #alert-text {
        display: flex;
        gap: 15px;
        margin-left: 15px;
        align-items: center;
    }

    #alert-icon {
        font-size: 27px;
    }

    #alert-message {
        max-width: 80%;
        font-size: 17px;
        font-family: "Source Sans Pro", sans-serif;
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

    .alert-open {
        transform: translateY(0px) !important;
        opacity: 100% !important;
    }

    .error-text {
        font-weight: bold !important;
        color: $negative !important;
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
