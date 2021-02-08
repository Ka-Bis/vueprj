<template>
  <div class="container">
    <h2 class="text-left">Derniers cours</h2>
   
    <!-- V3 WITH BOOTSTRAP-VUE AND DATA BIDIND IN A LOOP -->
    <div class="card-menu row-cols-1 row-cols-md-3">
      <div v-for="course in courses" :key="course.id">
        <b-card :title="course.title" :sub-title="course.subtitle" class="card-course">
          <b-card-text>
            {{ course.text }}
          </b-card-text>
          <a href="#" class="card-link">{{ course.link }}</a>
          <template #footer>
            <small>{{ course.date |  moment('timezone', 'Europe/Paris', 'dddd DD MMMM YYYY HH:mm') }}</small>
            <!-- TODO : modifier la langue de la date -->
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CourseCard",
    data() {
      const variables = {
        courses: [{
            id: 1,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
            date: new Date("02/12/2021"),
          },
          {
            id: 2,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
            date: new Date(),
          },
          {
            id: 3,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
            date: new Date(),
          },
          {
            id: 4,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
            date: new Date(),
          },
        ],
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