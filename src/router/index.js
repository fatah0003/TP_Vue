import { createRouter, createWebHistory } from 'vue-router'
import TasksManager from '@/views/TasksManager.vue'
import UsersManager from '@/views/UsersManager.vue'
import FormComponent from '@/components/FormComponent.vue'
import ListComponent from '@/components/ListComponent.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/task',
      name: 'Tasks',
      component: TasksManager,
      children: [
        {
          path: 'new',
          name: 'NewTask',
          component: FormComponent
        },
        {
          path: 'taskList',
          name: 'list',
          component: ListComponent
        }
      ]
    },
    {
      path: '/user',
      name: 'users',
      component: UsersManager
    }
  ]
})

export default router
