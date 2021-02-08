<template>
    <div>
        <h1>Liste des cours</h1>
        <section>
            <div class="container">
                <div class="row">
                    <div class="mb-3 ml-auto">
                        <b-dropdown text="Trier par" size="sm" variant="none">
                            <b-dropdown-item href="#">Intitulé</b-dropdown-item>
                            <b-dropdown-item href="#">Date</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <table class="table table-sm course-table">
                        <thead>
                            <tr>
                                <th>Intitulé</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="course in courses" :key="course.id">
                                <td>
                                    <router-link to="/" class="text-dark">
                                        {{ course.title }}
                                    </router-link>
                                </td>
                                <td>{{ course.date | moment("DD/MM/YYYY") }}</td>
                                <td class="mx-auto">
                                    <img src="@/assets/icons/pencil.svg" class="icon" alt="edit" @click="isClick()" />
                                    <img src="@/assets/icons/close.svg" class="icon" alt="remove" @click="isClick()" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link class="btn btn-outline-secondary rounded-0 btn-sm ml-auto"
                        :to="{ name: 'add-course' }">Ajouter un cours</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Course",
        methods: {
            isClick() {
                console.log("clicked");
            },
        },
        data() {
            const variables = {
                fields: ["title", "date"],
                courses: [{
                        id: 1,
                        title: "Course title",
                        subtitle: "Course subtitle",
                        text: `Some quick example text to build on the card title 
                        and make up the bulk of the card's content.`,
                        link: "Detail course link",
                        date: new Date(),
                    },
                    {
                        id: 2,
                        title: "Course title",
                        subtitle: "Course subtitle",
                        text: `Some quick example text to build on the card title 
                        nd make up the bulk of the card's content.`,
                        link: "Detail course link",
                        date: new Date(),
                    },
                    {
                        id: 3,
                        title: "Course title",
                        subtitle: "Course subtitle",
                        text: `Some quick example text to build on the card title 
                        and make up the bulk of the card's content.`,
                        link: "Detail course link",
                        date: new Date(),
                    },
                    {
                        id: 4,
                        title: "Course title",
                        subtitle: "Course subtitle",
                        text: `Some quick example text to build on the card title 
                        and make up the bulk of the card's content.`,
                        link: "Detail course link",
                        date: new Date(),
                    },
                ],
            };
            return variables;
        },
    };
</script>

<style scoped>
    .icon {
        width: 20px;
        margin: 0 1em;
    }

    .icon:hover {
        cursor: pointer;
    }
</style>