<script setup>
import { ref } from 'vue';
defineProps(['task']);

const show = ref(false);
function showHide(){
  show.value = !show.value;
}
</script>

<template>
  <li class="w-1/2 flex-col  space-x-10 space-y-10">
            {{ task.id }} {{ task.title }} {{ task.date }}
            <button @click="showHide()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Voir</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
            
        </li>
        <div v-if="show" id="description" class=""> {{ task.description }}</div>
</template>

<style scoped></style>
