<template>
  <div>
    <!-- <div class="container"> -->
    <!-- <div class="row" id="card-container"> -->
    <div class="user-card my-3">
      <div class="card-header border-0">
        <img src="@/assets/user.svg" alt="" class="img-user" />
      </div>
      <h1 class="card-title">{{ prenom }} {{ nom }}</h1>
      <h6 class="card-subtitle mb-2 py-1">{{ email }}</h6>
      <h6 class="card-subtitle mb-2 py-1">{{ job }}</h6>
    </div>
    <!-- </div> -->
    <!-- <div class="row"> -->
    <!-- <div class="file-support">
          <div class="card-header border-0">
            <h4>Supports de cours</h4>
          </div>
          <div>
            <ul>
              <li>Formation-JavaFX.pdf</li>
              <li>Lorem-ipsum.pdf</li>
            </ul>
          </div>
        </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <CourseCard />
  </div>
</template>

<script>
import CourseCard from "@/components/CourseCard.vue";
export default {
  name: "TrainerDshbrd",
  data() {
    return {
      nom: "Bond",
      prenom: "Jean",
      email: "example@dawan.fr",
      telephone: "0600000000",
      job: "Developpeur Java",
    };
  },
  components: {
    CourseCard,
  },
};
</script>

<style lang="css" scoped>
.img-user {
  width: 130px;
}

.user-card {
  display: block;
  /* padding: 0.5em; */
  border: 1px solid black;
  border-radius: 5px;
  /* width: 400px; */
  width: 25rem;
  margin: 6rem auto 2rem;
}

.file-support {
  float: left;
  /* margin: 1em auto; */
}

ul {
  list-style: none;
  text-align: left;
}
@media (max-width: 990px) {
  .user-card {
    margin: auto;
    width: 300px;
  }
}
</style>
