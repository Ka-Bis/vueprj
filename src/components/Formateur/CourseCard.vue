<template>
  <div class="container">
    <h2 class="text-left">Derniers cours</h2>

    <!-- V3 WITH BOOTSTRAP-VUE AND DATA BIDIND IN A LOOP -->
    <div class="card-menu row-cols-1 row-cols-md-3">
      <div v-for="course in courses.slice(0, 6)" :key="course.id">
        <b-card :title="course.title" class="card-course">
          <div>
            <p>
              Du
              {{
                course.dateBegin
                  | moment("timezone", "Europe/Paris", "DD/MM/YYYY")
              }}
              au
              {{
                course.dateEnd
                  | moment("timezone", "Europe/Paris", "DD/MM/YYYY")
              }}
            </p>
          </div>
          <b-card-text class="desc">{{ course.description }}</b-card-text>
          <a :href="course.id" class="card-link">Lien vers le cours</a>
          <b-link class="card-link">Detail</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import CourseModel from "@/mock/course.json";
export default {
  name: "CourseCard",
  data() {
    return {
      courses: CourseModel,
    };
  },
};
</script>

<style lang="css" scoped>
.card-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card-menu > div[class*="card-course"] {
  display: flex;
}

.card-course {
  width: 18rem;
  margin: 1em auto;
  margin-bottom: 1em;
}

.desc {
  text-overflow: ellipsis;
  text-align: center;
}
</style>
