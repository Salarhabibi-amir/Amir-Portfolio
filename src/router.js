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
    path: '/home',
    redirect: '/'
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectList
  },
  {
    path: '/project-list',
    redirect: '/projects'
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactForm
  },
  {
    path: '/Amir-Portfolio',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
