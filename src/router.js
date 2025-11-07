import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Training from './pages/Training.vue'
import Media from './pages/Media.vue'
import Tane from './pages/Tane.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/training', component: Training },
  { path: '/media', component: Media },
  { path: '/tane', component: Tane },
  { path: '/contact-us', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
