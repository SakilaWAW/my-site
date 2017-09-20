import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import NavBar from '../components/navBar.vue'
import PythonContent from '../components/sitecontent/pythonContent.vue'
import AboutMeContent from '../components/sitecontent/aboutMeContent.vue'
import JavaContent from '../components/sitecontent/javaContent.vue'
import JSContent from '../components/sitecontent/jsContent.vue'
import AlgorithmContent from '../components/sitecontent/algorithmContent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/python',
      component: PythonContent
    },
    {
      path: '/about-me',
      component: AboutMeContent
    },
    {
      path: '/java',
      component: JavaContent
    },
    {
      path: '/javascript',
      component: JSContent
    },
    {
      path: '/algorithm',
      component: AlgorithmContent
    },
  ]
})
