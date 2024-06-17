<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
const router = useRouter();

const taskStore = useTasksStore();
taskStore.getTasks();

function remove(taskId){
  taskStore.removeTask(taskId); 
  taskStore.getTasks()
}



// function show(id){
//   router.push({name: 'show', params: {id: id}})
// }

// const list = ref([]);
// function removeTask(id) {
//   taskStore.remove(id);
// }
function update(taskId){
  router.push({name: 'editTask', params: {id: taskId}})

}

</script>
<template>
    
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class=" flex space-x-10 "> 
        <h2>TODO LIST</h2>
        <div> Nombre de taches terminées : {{ taskStore.dones }}</div>
    </div>
      <ul v-for="item in taskStore.tasks" :key="item.id">

        <li class="w-1/2 flex-col  space-x-10 space-y-10">
            <!-- {{ item.id }}  -->
            {{ item.title }} {{ item.date }}
            <button @click="taskStore.showDetails(item.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Voir</button>
            
            <button @click="update(item.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
            
            <button @click="remove(item.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
        </li>
        
      </ul>
      
    </div>
</template>


<style scoped>

</style>