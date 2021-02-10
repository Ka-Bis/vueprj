<template>
  <div>
    <h1>Liste des cours</h1>
    <section>
      <div class="container">
        <div class="row">
          <div class="mb-3 ml-auto">
            <b-dropdown
              text="Trier par date"
              size="sm"
              variant="none"
              class="drpdwn"
            >
              <b-dropdown-item href="#">Croissant</b-dropdown-item>
              <b-dropdown-item href="#">Decroissant</b-dropdown-item>
            </b-dropdown>

            <b-dropdown
              text="Trier par Intitulé"
              size="sm"
              variant="none"
              class="drpdwn"
            >
              <b-dropdown-item href="#">Croissant</b-dropdown-item>
              <b-dropdown-item href="#">Decroissant</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="offset-md-1 col-10 offset-md-1">
            <b-table
              id="my-table"
              responsive
              striped
              fixed
              small
              :items="courses"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>
              <template #cell(title)="data">
                <b-link href="#" style="color:black;">
                  {{ data.value }}
                </b-link>
              </template>
              <template #cell(edit)>
                <font-awesome-icon
                  :icon="['fas', 'pen']"
                  class="icon text-secondary"
                />
              </template>
              <template #cell(remove)>
                <font-awesome-icon
                  :icon="['fas', 'times']"
                  class="icon text-danger"
                  @click="deleteItem(index)"
                />
              </template>
              <template #cell(dateBegin)="data">
                {{
                  data.value | moment("timezone", "Europe/Paris", "DD/MM/YYYY")
                }}
              </template>
              <template #cell(dateEnd)="data">
                {{
                  data.value | moment("timezone", "Europe/Paris", "DD/MM/YYYY")
                }}
              </template>
            </b-table>
          </div>
          <div class="ml-auto">
            <a class="btn rounded-0 btn-sm ml-auto mb-2" :href="add_course">
              Ajouter un cours
            </a>
          </div>
        </div>
        <b-pagination
          class="pages text-dark"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          size="sm"
        >
        </b-pagination>
      </div>
    </section>
  </div>
</template>

<script>
// import { CourseModel } from "@/utils/Course.js";
import CourseModel from "@/mock/course.json";
export default {
  name: "Course",
  data() {
    return {
      courses: CourseModel,
      fields: [
        "index",
        // {
        //   key: "id",
        //   label: "#",
        // },
        {
          key: "title",
          label: "Intitulé",
          sortable: true,
        },
        {
          key: "dateBegin",
          label: "Date de debut",
          sortable: true,
        },
        {
          key: "dateEnd",
          label: "Date de fin",
          sortable: true,
        },
        "edit",
        "remove",
      ],
      perPage: 10,
      currentPage: 1,
      add_course: "/cours/ajouter-un-cours",
    };
  },
  methods: {
    deleteItem(index) {
      this.courses.splice(index, 1);
    },
  },
  computed: {
    rows() {
      return this.courses.length;
    },
  },
};
</script>
<style scoped>
.drpdwn {
  outline: green;
}

.drpdwn:focus {
  outline: red;
}

.icon {
  /* width: 30px; */
  margin: 0 0.5em;
}

.icon:hover {
  cursor: pointer;
}

.btn {
  border: 1px solid black;
  outline: none;
}

.btn:focus {
  outline: 0;
}

.btn:hover {
  background-color: inherit;
  color: inherit;
}

.pages:focus {
  outline: red;
}

.page-item > button {
  background-color: red;
}
</style>
