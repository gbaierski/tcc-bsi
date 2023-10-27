<script setup>
    import { onMounted } from "vue";
    import { RouterLink, RouterView } from "vue-router";
    import { useDataStore } from "@/stores/dataStore";

    const dataStore = useDataStore();

    onMounted(() => {
        dataStore.loadFromLocalStorage();
    });
</script>

<template>  
    <RouterView/>
</template>

<style scoped>
</style>
