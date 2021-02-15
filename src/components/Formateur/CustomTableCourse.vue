<template>
  <b-table
    id="my-table"
    striped
    fixed
    small
    :items="items"
    :fields="fields"
    :per-page="perPage"
    :current-page="currentPage"
  >
    <template #cell(title)="data">
      <b-link href="#" style="color:black;">
        {{ data.value }}
      </b-link>
    </template>

    <template #cell(dateBegin)="data">
      {{ data.value | moment("timezone", "Europe/Paris", "DD/MM/YYYY") }}
    </template>

    <template #cell(dateEnd)="data">
      {{ data.value | moment("timezone", "Europe/Paris", "DD/MM/YYYY") }}
    </template>

    <template #cell(modifier)>
      <font-awesome-icon :icon="['fas', 'pen']" class="icon text-secondary" />
    </template>

    <template #cell(supprimer)>
      <font-awesome-icon :icon="['fas', 'times']" class="icon text-danger" />
    </template>
  </b-table>
</template>

<script>
import courseModel from "@/mock/course.json";
import { courseFields } from "@/mock/fields.js";
import { courseItemLength } from "@/mock/itemLength.js";
export default {
  name: "CustomTableCourse",
  props:{
    per_page:Number
  },
  data() {
    return {
      items: courseModel,
      fields: courseFields,
      itemLength: courseItemLength,
      perPage: 10,
      currentPage: 1,
    };
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
.icon:hover {
  cursor: pointer;
}
</style>
