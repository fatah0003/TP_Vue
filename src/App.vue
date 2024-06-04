<script setup>

import FormComponent from "./components/FormComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import { ref } from "vue";

const variable = ref({});
function addTask(event){
    const data = {
        title: event.title,
        description: event.description,
        date: event.date
    }
    variable.value = data;
}
</script>

<template>

<FormComponent @add-task="addTask($event)"></FormComponent>
<ListComponent :taskAdded="variable"></ListComponent>

</template>



<style scoped>



</style>
