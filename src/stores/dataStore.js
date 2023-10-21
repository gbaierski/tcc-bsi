import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    layout1: {
      stepCount: 0,
      finishAttempts: 0,
      totalTime: 0,
      processingTime: 0,
    },
    layout2: {
        stepCount: 0,
        finishAttempts: 0,
        totalTime: 0,
        processingTime: 0,
    },
  }),
  actions: {
    // Layout 1
    setStepCountL1(value) {
        this.layout1.stepCount = value;
    },
    setFinishAttemptsL1(value) {
        this.layout1.finishAttempts = value;
    },
    setTotalTimeL1(value) {
        this.layout1.totalTime = value;
    },
    setProcessingTimeL1(value) {
        this.layout1.processingTime = value;
    },

    // Layout 2
    setStepCountL2(value) {
        this.layout2.stepCount = value;
    },
    setFinishAttemptsL2(value) {
        this.layout2.finishAttempts = value;
    },
    setTotalTimeL2(value) {
        this.layout2.totalTime = value;
    },
    setProcessingTimeL2(value) {
        this.layout2.processingTime = value;
    },

    // Função para salvar os dados no Local Storage (Cache)
    saveToLocalStorage() {
        localStorage.setItem('dataStoreData', JSON.stringify(this.$state));
    },
  
    // Função para carregar os dados do Local Storage (Cache)
    loadFromLocalStorage() {
        const data = localStorage.getItem('dataStoreData');
        if (data) {
            this.$state = JSON.parse(data);
        }
    },
  },
});