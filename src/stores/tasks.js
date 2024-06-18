import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  // définir tasks
  const tasks = ref();
  const task = ref({})
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

  // getTask
  async function getTask(taskId){
    await fetch(`https://todolist-api.rema-tech.fr/api/tasks/${taskId}`)
    .then((response) => {
      response.json()
      .then((data) => {
        task.value = data
      })
    })
  }

  function updateTask() {
    fetch(`https://todolist-api.rema-tech.fr/api/tasks/${task.value.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/merge-patch+json'
      },
      body: JSON.stringify(task.value)
    })
    .then((response) => {
      response.json().then((data) => {
        task.value = data
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

  return { tasks, getTasks, addTask, removeTask, showDetails, getTask, updateTask, task }
})