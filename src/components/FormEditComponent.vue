<script setup>
// recupérer l id via la route
import { useRoute, useRouter } from "vue-router";
import { useTasksStore } from "@/stores/tasks";

const route = useRoute();
const router = useRouter();


const taskStore = useTasksStore();

taskStore.getTask(route.params.id)

function editTask() {
    taskStore.updateTask()
    router.push({ name: 'list' })
}
</script>


<template>
<div class="w-full max-w-xs">
  <form @submit.prevent="editTask()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Titre
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="title" type="text" v-model="taskStore.task.title">
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
            Date
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" name="date" type="date" v-model="taskStore.task.deadline">
    </div>
    <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Modifier
        </button>
    </div>
</form>

</div>

</template>



<style scoped>



</style>