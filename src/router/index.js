import Vue from 'vue'
import VueRouter from 'vue-router'
import views from "../views/_index"

Vue.use(VueRouter)

var routes = Object.keys(views).map(key => ({
   path: views[key].path,
   name: views[key].name,
   component: views[key]
}))

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router