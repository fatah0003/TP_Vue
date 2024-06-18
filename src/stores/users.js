import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  // définir tasks
  const users = ref();
  // getUsers
  function getUsers() {
    fetch('https://todolist-api.rema-tech.fr/api/users')
    .then((response) => {
      response.json().then((data) => {
        users.value = data['hydra:member']
      })
    })
  }

  //adduser

  function addUser(newuser) {
    fetch('https://todolist-api.rema-tech.fr/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json'
      },
      body: JSON.stringify(newuser)
    }).then((response) => {
      response.json().then((data) => {
        getUsers()
        // tasks.value = data['hydra:member']
      })
    })
  }

  // removeTask
  function removeUser(taskId) {
    fetch(`https://todolist-api.rema-tech.fr/api/users/${taskId}`, {
      method: 'DELETE'
    });
  }

  

  return { users, getUsers, addUser, removeUser }
})