import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Blogs from "../views/Blogs.vue";
import CallUs from "../views/callUs.vue";
import About from "../views/About.vue";
import knowMoreAboutBlogs from "../views/knowMoreAboutBlogs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path:'/Blogs',
    name: 'blog',
    component: Blogs
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  },
  {
    path:'/callUs',
    name: 'CallUs',
    component: CallUs
  },

  {
    path:'/blog/:title',
    name: 'knowMoreAboutBlogs',
    component: knowMoreAboutBlogs,
    props: true
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
