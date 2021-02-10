<template>
  <div id="app">
    <Navbar />
    <VerticalNav />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navigation/Navbar.vue";
import VerticalNav from "./components/Navigation/VerticalNav.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    VerticalNav,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;700&display=swap');
#app {
  font-family: 'Noto sans HK';
  text-align: center;
  color: #2c3e50;
}
</style>
