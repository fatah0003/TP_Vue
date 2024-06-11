import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  //definir une proprieté
  const tasks = ref([])
  //definir une proprieté derivée
  const dones = computed(() => {
    const result = tasks.value.filter((task) => {
      return task.status === 'done'
    })
    return result.length
  })
  //definir les méthodes

  //ajouter une tache
  function create(task) {
    tasks.value.push(task)
  }
  // supprimer une tache
  function remove(id) {
    tasks.value = tasks.value.filter(task => task.id !== id);
  }

  //modifier une tache
 

  return { tasks, dones, create, remove }
})
