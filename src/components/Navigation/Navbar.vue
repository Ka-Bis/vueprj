<template>
  <header>
    <!-- V1 BOOTSTRAP -->
    <!-- <nav class="navbar navbar-expand-lg bg-dark ml-auto">
      <div class="container-fluid">
        <button class="navbar-toggler border-0 btn-toggle" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/institutionnel-logo.png" alt="" id="dawan_logo" />
        </router-link>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link a-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link a-link" to="/espace-pedagogique">
                Espace pedagogique
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link a-link" to="/espace-administrative">
                Espace administrative
              </router-link>
            </li>
          </ul>
          <form class="ml-auto">
            <div class="row">
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Search" />
                <button class="btn btn-outline-danger" type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav> -->
    <!-- V2 BOOTSTRAP-VUE -->
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar">
      <b-navbar-brand href="#">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/institutionnel-logo.png" alt="" id="dawan_logo" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="border-0"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item> -->
          <router-link class="nav-link a-link bg-dark" to="/">
            Accueil
          </router-link>
          <!-- </b-nav-item> -->
          <!-- <b-nav-item> -->
          <router-link class="nav-link a-link" to="/espace-pedagogique">
            Espace pedagogique
          </router-link>
          <!-- </b-nav-item> -->
          <!-- <b-nav-item> -->
          <router-link class="nav-link a-link" to="/espace-administrative">
            Espace administrative
          </router-link>
          <!-- </b-nav-item> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form class="nav-form">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" style="width:200px;" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="outline-danger">
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Breadcrumb />
  </header>
</template>

<script>
  import Breadcrumb from "@/components/Navigation/Breadcrumb.vue";
  export default {
    name: "Navbar",
    components: {
      Breadcrumb,
    },
  };
</script>

<style scoped>
  /* .v-navbar {
  background-color: #343a40;
} */
  .navbar {
    margin-top: 3em;
    height: 4em;
    /* background-color: #212529; */
    /* width: 70%; */
  }

  .a-link,
  .nav-form {
    background-color: rgb(52, 58, 64);
  }

  ul {
    font-size: 20px;
  }

  .a-link,
  .btn-toggle {
    color: #fff;
  }

  /* .input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
} */
  /* .btn {
    border-radius: 0 5px 5px 0;
  } */

  @media (max-width: 990px) {
    .navbar {
      width: 100%;
      margin: 0;
    }

    #dawan_logo {
      display: none;
    }

    .nav-form {
      justify-content: center;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
  }
</style>