<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/users";
const router = useRouter();

const userStore = useUsersStore();
userStore.getUsers();

function remove(taskId){
  userStore.removeUser(taskId); 
  userStore.getUsers()
}
</script>
<template>
    
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class=" flex space-x-10 "> 
        <h2>Liste des utilisateur</h2>

    </div>
      <ul v-for="item in userStore.users" :key="item.id">
                {{ item.firstname }} {{ item.lastname }} {{ item.email }}
        <li class="w-1/2 flex-col  space-x-10 space-y-10">
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">voir</button>
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier</button>
            
            <button @click="remove(item.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
        </li>
        
      </ul>
      
    </div>
</template>


<style scoped>

</style>
