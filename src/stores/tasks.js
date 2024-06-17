import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  // définir tasks
  const tasks = ref();
  // getTasks
  function getTasks() {
    fetch('https://todolist-api.rema-tech.fr/api/tasks')
    .then((response) => {
      response.json().then((data) => {
        tasks.value = data['hydra:member']
      })
    })
  }
  // addTask
  function addTask(newtask) {
    fetch('https://todolist-api.rema-tech.fr/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json'
      },
      body: JSON.stringify(newtask)
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
        // tasks.value = data['hydra:member']
      })
    })
  }
  // removeTask
  function removeTask(taskId) {
    fetch(`https://todolist-api.rema-tech.fr/api/tasks/${taskId}`, {
      method: 'DELETE'
    });
  }

  //showDetails
  function showDetails(taskId){
fetch(`https://todolist-api.rema-tech.fr/api/tasks/${taskId}`)
.then((response) => {
  response.json().then((data) => {
    tasks.value = data['hydra:member']
  })
})
  }
  // updateTask
  // function updateTask (taskId){
  //   fetch(`https://todolist-api.rema-tech.fr/api/tasks/${taskId}`, {
  //     method: 'PATCH'
  //   });
  // }
  // définir loading
  // définir error
  // définir les Actions

  // updateTask

  return { tasks, getTasks, addTask, removeTask, showDetails }
})
