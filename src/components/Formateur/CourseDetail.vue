<template>
  <div class="container">
    <div>
      <custom-detail/>
    </div>
  </div>
</template>

<script>
import CustomDetail from "../CustomDetail.vue";
export default {
  components: { CustomDetail },
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
