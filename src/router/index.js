import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Compteur from "@/components/Compteur.vue";
import FormateurDshbrd from "@/components/Formateur/FormateurDashboard.vue";
import Course from "@/components/Formateur/CourseDashboard.vue";
// import CourseDetail from "@/components/Formateur/CourseDetail.vue";
import AddCourse from "@/components/Formateur/Add-Course.vue";
import NotFound from "@/components/NotFound.vue";
Vue.use(VueRouter);

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
    path: "/home/formateur/dashboard",
    name: "formateurDshbrd",
    component: FormateurDshbrd,
  },
  {
    path: "/cours",
    name: "course",
    component: Course,
  },
  // { path: "/cours/:id", name: "c", component: CourseDetail },
  {
    path: "/cours/ajouter-un-cours",
    name: "add-course",
    component: AddCourse,
    // component: ()=> import('@/components/Formateur/Add-Course.vue'),
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
