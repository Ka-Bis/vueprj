<template>
  <div class="container">
    <h2 class="text-left">Derniers cours</h2>

    <!-- V3 WITH BOOTSTRAP-VUE AND DATA BIDIND IN A LOOP -->
    <div class="card-menu row-cols-1 row-cols-md-3">
      <div v-for="course in courses.slice(0, 6)" :key="course.id">
        <b-card :title="course.title" class="card-course">
          <b-card-text class="text">
            {{ course.text }}
          </b-card-text>
          <div>
            <p>Du {{course.dateBegin | moment("timezone","Europe/Paris","DD/MM/YYYY")}} au
              {{course.dateEnd | moment("timezone","Europe/Paris","DD/MM/YYYY")}}</p>
          </div>
          <p>{{course.description}}</p>
          <a :href="course.id" class="card-link">Lien du cours</a>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  // import { CourseModel } from "@/utils/Course.js";
  import CourseModel from "@/mock/course.json";
  export default {
    name: "CourseCard",
    data() {
      const variables = {
        courses: CourseModel,
      };
      return variables;
    },
  };
</script>

<style lang="css" scoped>
  .card-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
  }

  .card-menu>div[class*="card-course"] {
    display: flex;
  }

  .card-course {
    width: 18rem;
    height: 16rem;
    /* margin-left: 1em;
    margin-right: 1em; */
    margin: 1em auto;
    margin-bottom: 1em;
    /* margin: 1em; */
  }

  /* .card-course:last-child {
    float: left !important;
    background-color: black;
  } */
</style>