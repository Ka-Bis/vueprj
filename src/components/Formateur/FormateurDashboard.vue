<template>
  <div>
    <div class="user-card my-3">
      <div class="card-header border-0">
        <img src="@/assets/user.svg" alt="" class="img-user" />
      </div>
      <h1 class="card-title">{{ formateur.prenom }} {{ formateur.nom }}</h1>
      <h6 class="card-subtitle mb-2 py-1">{{ formateur.email }}</h6>
      <h6 class="card-subtitle mb-2 py-1">{{ formateur.job }}</h6>
    </div>
    <CourseCard />
  </div>
</template>

<script>
  import CourseCard from "@/components/Formateur/CourseCard.vue";
  export default {
    name: "TrainerDshbrd",
    data() {
      const variables = {
        formateur: {
          nom: "Bond",
          prenom: "Jean",
          email: "example@dawan.fr",
          telephone: "0600000000",
          job: "Developpeur Java",
        },
      };
      return variables;
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