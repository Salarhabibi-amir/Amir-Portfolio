import { createWebHistory, createRouter } from 'vue-router'
import ProjectList from './components/ProjectList.vue'
import ContactForm from './components/ContactForm.vue'
import HeadLine from './components/HeadLine.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HeadLine
  },
  {
    path: '/project-list',
    name: 'projects',
    component: ProjectList
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
