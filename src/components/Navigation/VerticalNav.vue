<template>
  <div>
    <nav class="nav">
      <b-nav-item class="v-nav" href="/formateur/cours">Cours</b-nav-item>
      <b-nav-item class="v-nav" href="/devoirs">Devoirs</b-nav-item>
      <b-nav-item class="v-nav" href="/examens">Examens</b-nav-item>
      <b-nav-item class="v-nav" href="/absences">Absences</b-nav-item>
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
a {
  color: black;
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
