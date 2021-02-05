<template>
  <div class="compteur">
    <p>Bouton cliqué {{ total }} fois.</p>
    <button @click="increment()" class="btn btn-outline-dark">Clique</button>
  </div>
</template>

<script>
export default {
  name: "Compteur",
  data() {
    return { total: 0 };
  },
  methods: {
    increment() {
      this.total += 1;
    },
  },
};
</script>

<style scoped>
.compteur {
    /* margin-top: 50em; */
    background-color: lawngreen;
}
</style>