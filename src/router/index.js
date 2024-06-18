import { createRouter, createWebHistory } from 'vue-router'
import TasksManager from '@/views/TasksManager.vue'
import UsersManager from '@/views/UsersManager.vue'
import FormComponent from '@/components/FormComponent.vue'
import FormEditComponent from '@/components/FormEditComponent.vue'

import ListComponent from '@/components/ListComponent.vue'
import DetailsComponent from '@/components/DetailsComponent.vue'
import UsersList from '@/components/UsersList.vue'
import FormUsers from '@/components/FormUsers.vue'








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
          component: ListComponent,
        },
        {
          path: 'details/:id',
          name: 'detail',
          component: DetailsComponent
        },
        {
          path: ':id/edit',
          name: 'edit',
          component: FormEditComponent
        }
      ]
    },
    {
      path: '/user',
      name: 'users',
      component: UsersManager,
      children: [
        {
          path: 'userslist',
          name: 'userlist',
          component: UsersList
        },
        {
          path: 'add',
          name: 'newuser',
          component: FormUsers
        }
      ]
    }
  ]
})

export default router
