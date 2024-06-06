<script setup>

import { RouterLink, RouterView } from "vue-router";
import FormComponent from "./components/FormComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import { ref } from "vue";

const variable = ref({});
function addTask(event) {
    const data = {
        title: event.title,
        description: event.description,
        date: event.date
    }
    variable.value = data;
}
</script>

<template>


    <nav class="bg-blue-500 text-white p-4 flex justify-around items-center">
        <RouterLink :to="{name: 'Tasks'}">Tâches</RouterLink>
        <RouterLink :to="{ name: 'users' }">Utilisateurs</RouterLink>
    </nav>
    <div>
        <RouterView></RouterView>
    </div>

    <!-- <FormComponent @add-task="addTask($event)"></FormComponent>
<ListComponent :taskAdded="variable"></ListComponent> -->

</template>



<style scoped></style>