import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Blogs from "../views/Blogs.vue";
import CallUs from "../views/callUs.vue";
import About from "../views/About.vue";
import AboutBlogs from "../views/AboutBlogs.vue";
import CatogaryPage from "../views/catogaryPage.vue";
import Profile from "../views/Profile.vue";
import AddNewTrip from "../views/AddNewTrip.vue";
import EditTrip from "../views/EditTrip.vue";
import ProposedTrips from "../views/ProposedTrips.vue";
import FavorateTrips from "../views/favorateTrips.vue";

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
    component: About,
  },
  {
    path: "/Blogs",
    name: "blog",
    component: Blogs,
  },
  {
    path: "/Blogs/:id",
    name: "AboutBlogs",
    component: AboutBlogs,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/callUs",
    name: "CallUs",
    component: CallUs,
  },
  {
    path: "/catogaryPage",
    name: "CatogaryPage",
    component: CatogaryPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/AddNewTrip",
    name: "AddNewTrip",
    component: AddNewTrip,
  },
  {
    path: "/ProposedTrips",
    name: "ProposedTrips",
    component: ProposedTrips,
  },
  {
    path: "/EditTrip",
    name: "EditTrip",
    component: EditTrip,
  },
  {
    path: "/profile/favorateTrips",
    name: "favorateTrips",
    component: FavorateTrips,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
