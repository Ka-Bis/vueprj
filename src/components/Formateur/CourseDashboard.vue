<template>
  <div>
    <h1>Affichage des cours</h1>
    <section>
      <div class="container">
        <div class="row">
          <div class="my-3 ml-auto">
            <b-form inline>
              <label for="pageSelect" class="mr-sm-2">Affichage :</label>
              <b-form-select
                id="pageSelect"
                v-model="per_page"
                :options="itemLength"
                class="border-0 opts"
                size="sm"
              >
              </b-form-select>
            </b-form>
          </div>
          <div class="col-md-12">
            <b-table
              id="my-table"
              striped
              fixed
              small
              :items="items"
              :fields="fields"
              :per-page="per_page"
              :current-page="currentPage"
            >
              <template #cell(title)="data">
                <b-link href="#" style="color:black;">
                  {{ data.value }}
                </b-link>
              </template>

              <template #cell(dateBegin)="data">
                {{ data.value | formatDate }}
              </template>

              <template #cell(dateEnd)="data">
                {{ data.value | formatDate }}
              </template>

              <template #cell(modifier)>
                <font-awesome-icon
                  :icon="['fas', 'pen']"
                  class="icon text-secondary"
                />
              </template>

              <template #cell(supprimer)>
                <font-awesome-icon
                  :icon="['fas', 'times']"
                  class="icon text-danger"
                />
              </template>
            </b-table>
          </div>
        </div>
        <b-pagination
          class="pages ml-auto border-0"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="per_page"
          aria-controls="my-table"
          size="sm"
        >
        </b-pagination>
      </div>
    </section>
  </div>
</template>

<script>
// import courseModel from "@/mock/course.json";
// import { courseFields } from "@/mock/fields.js";
// import { courseItemLength } from "@/mock/itemLength.js";
export default {
  name: "Course",
  props: {
    // items,fields,itemLength,perPage
    items: {
      type: Array,
      required: true,
    },
    itemLength: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // items: courseModel,
      // fields: courseFields,
      // itemLength: courseItemLength,
      per_page: this.perPage,
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
.opts,
label {
  color: black;
}

.icon:hover {
  cursor: pointer;
}
</style>
