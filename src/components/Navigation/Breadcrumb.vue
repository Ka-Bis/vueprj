<template>
  <div>
    <!-- <nav aria-label="breadcrumb" class="ariane">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active">Data</li>
      </ol>
    </nav> -->
        
    <b-breadcrumb class="ariane">
      <b-breadcrumb-item><router-link to="/">Home</router-link></b-breadcrumb-item>
      <b-breadcrumb-item>Foo</b-breadcrumb-item>
      <b-breadcrumb-item>Bar</b-breadcrumb-item>
      <b-breadcrumb-item>Baz</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped>
.ariane {
  /* margin-left: 11em; */
  float: right;
  /* background-color: inherit; */
}

.breadcrumb {
  background-color: inherit;
}
@media (max-width: 990px) {
  .ariane {
    margin: 0;
    float: left;
    /* background-color: rgba(173, 171, 171, 0.171); */
    border-radius: 0;
  }
}
</style>
