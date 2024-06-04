<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['taskAdded']);

const list = ref([]);
watch(
()=>props.taskAdded,
()=>{
  list.value.push(props.taskAdded)
}

);


</script>
<template>
    
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class=" flex space-x-10 "> 
        <h2>TODO LIST</h2>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Ajouter
      </button>
    </div>
      <ul>
        <li v-for="item in list" :key="item.id" class="w-1/2 flex-col  space-x-10 space-y-10">
            {{ item.id }} {{ item.title }} {{ item.date }}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Voir</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
            
        </li>
      </ul>
    </div>
</template>


<style scoped>

</style>