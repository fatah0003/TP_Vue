<script setup>
import { ref } from 'vue';


import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

defineEmits(['add-task']);
const data = ref({});
function redirectToCreate(data) {
  router.push({name: 'list', query: data})
  
}
</script>



<template>
<div class="w-full max-w-xs">
  <form @submit.prevent="redirectToCreate(data)" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Titre
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" type="text" v-model="data.title">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <textarea name="Description" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="data.description"></textarea>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
        Date
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" type="date" v-model="data.date">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Ajouter la tache
      </button>
    </div>
  </form>
</div>

</template>



<style scoped>



</style>