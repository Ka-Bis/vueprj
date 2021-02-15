<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Intitulé : {{c.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
          {{c.dateBegin | formatDate}}
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDetail",
  data() {
    return {
      c: {
        id: 1,
        title: "Sub-Ex",
        trainer: "Burr Skiggs",
        dateBegin: "2020-02-12T07:36:18Z",
        dateEnd: "2020-02-15T07:36:18Z",
        support_file: null,
        promotion: [
          { id: 2, name: "CDA Nantes" },
          { id: 3, name: "CDA Paris" },
        ],
        description:
          "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
        information_note: null,
      },
    };
  },
};
</script>

<style scoped></style>
