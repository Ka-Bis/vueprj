<template>
  <div class="container">
    <h2 class="text-left">Derniers cours</h2>
    <!-- V1 WITH BOOTSTRAP -->
    <!-- <div class="card-menu">
      <div class="card card-course">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

      <div class="card card-course">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>

      <div class="card card-course">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div> -->

    <!-- V2 WITH BOOTSTRAP-VUE -->
    <!-- <b-card title="Card title" sub-title="Card subtitle" class="card-course">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make
          up the bulk of the card's content.
        </b-card-text>
        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>

      <b-card title="Card title" sub-title="Card subtitle" class="card-course">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make
          up the bulk of the card's content.
        </b-card-text>
        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>

      <b-card title="Card title" sub-title="Card subtitle" class="card-course">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make
          up the bulk of the card's content.
        </b-card-text>
        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card> -->

    <!-- V3 WITH BOOTSTRAP-VUE AND DATA BIDIND IN A LOOP -->
    <div class="card-menu row-cols-1 row-cols-md-3">
      <div v-for="course in courses" :key="course.id">
        <b-card :title="course.title" :sub-title="course.subtitle" class="card-course">
          <b-card-text>
            {{ course.text }}
          </b-card-text>
          <a href="#" class="card-link">{{ course.link }}</a>
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
          },
          {
            id: 2,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
          },
          {
            id: 3,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
          },
          {
            id: 4,
            title: "Course title",
            subtitle: "Course subtitle",
            text: `Some quick example text to build on the card title 
                and make up the bulk of the card's content.`,
            link: "Detail course link",
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
    justify-content: center;
  }

  .card-menu>div[class*="card-course"] {
    display: flex;
  }

  .card-course {
    width: 18rem;
    /* height: 18rem; */
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