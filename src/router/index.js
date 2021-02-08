import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Compteur from "@/components/Compteur.vue";
import FormateurDshbrd from "@/components/Formateur/FormateurDashboard.vue";
import Course from "@/components/Formateur/CourseDashboard.vue";
import AddCourse from "@/components/Formateur/Add-Course.vue";
import NotFound from "@/components/NotFound.vue";
Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/home",
  },
  { path: "/home", component: Home },
  {
    path: "/compteur",
    name: "compteur",
    component: Compteur,
  },
  {
    path: "/formateur/dashboard",
    name: "formateurDshbrd",
    component: FormateurDshbrd,
  },
  {
    path: "/formateur/cours",
    name: "course",
    component: Course,
  },
  {
    path: "/formateur/ajouter-cours",
    name: "add-course",
    component: AddCourse,
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
