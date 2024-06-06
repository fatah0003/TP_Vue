<script setup>
import { ref, onMounted, onUpdated} from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import LineListe from './LineListe.vue';


const list = ref([]);

onMounted(()=>{
  const istaskExist = list.value.find((item) =>{
    return item.title === route.query.title
  })
  if(!istaskExist && route.query.title !== undefined){
    list.value.push(route.query)
  }
});

onUpdated(()=>{
  const istaskExist = list.value.find((item) =>{
    return item.title === route.query.title
  });
  if(!istaskExist && route.query.title !== undefined){
    list.value.push(route.query)
  }
});
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
        <LineListe :task="item" v-for="item in list" :key="item.id"></LineListe>
      </ul>
    </div>
</template>


<style scoped>

</style>