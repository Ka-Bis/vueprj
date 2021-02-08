<template>
  <div class="mt-5">
    <nav class="nav">
      <router-link class="nav-link v-nav" :to="{name:'course'}">Cours</router-link>
      <router-link class="nav-link v-nav" to="/devoirs">Devoirs</router-link>
      <router-link class="nav-link v-nav" to="/examens">Examens</router-link>
      <router-link class="nav-link v-nav" to="/absences">Absences</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "VerticalNav",
};
</script>

<style scoped>
nav {
  display: inline;
  float: left;
  margin-left: 1.5em;
}
.v-nav {
  color: black;
  border-bottom: 1px solid rgb(184, 181, 181);
  margin-left: 0.5em;
  font-size: 20px;
}
.v-nav:last-child {
  border-bottom: none;
}
.v-nav:hover {
  background-color: rgba(226, 27, 40, 0.65);
}

@media (max-width: 990px) {
  nav {
    float: none;
    /* border: 1px solid black; */
  }
  .v-nav {
    border-bottom: none;
    font-size: 20px;
    margin: 0;
  }
  .v-nav:hover {
    background-color: inherit;
  }
}
</style>
