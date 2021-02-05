<template>
  <div>
    <div id="model1" class="model">
      <div class="disconnect">
        <a class="">Déconnexion</a>
      </div>

      <nav class="background-color343a40">
        <ul class="menu">
          <li class="">
            <a><img src="@/assets/institutionnel-logo.png" id="logo"/></a>
          </li>
          <li class=""><a class="colorwhite amodel1" href="#">Accueil</a></li>
          <li class=""><a class="colorwhite amodel1" href="#">Espace Pédagogique</a></li>
          <li class="">
            <a class="colorwhite amodel1" href="#">Espace Administratif</a>
          </li>
        </ul>

        <form class="d-flex form" action="">
          <input class="form-control mr-3" type="text" placeholder="Search" />
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </nav>
    </div>
<!-- 
    <div id="model2" class="model">
      <div class="disconnect">
        <a class="">Déconnexion</a>
      </div>

      <nav class="background-colorc9c9c9">
        <ul class="menu">
          <li class="">
            <a><img src="@/assets/institutionnel-logo.png" id="logo"/></a>
          </li>
          <li class=""><a class="colorwhite amodel2">Accueil</a></li>
          <li class=""><a class="colorwhite amodel2">Espace Pédagogique</a></li>
          <li class="">
            <a class="colorwhite amodel2">Espace Administratif</a>
          </li>
        </ul>

        <form class="d-flex" action="">
          <input class="form-control me-2" type="text" placeholder="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
    </div>

    <div id="model3" class="model">
      <div class="disconnect">
        <a class="">Déconnexion</a>
      </div>

      <nav class="background-color343a40">
        <ul class="menu">
          <li class="">
            <a><img src="@/assets/institutionnel-logo.png" id="logo"/></a>
          </li>
          <li class=""><a class="colorwhite amodel3">Accueil</a></li>
          <li class=""><a class="colorwhite amodel3">Espace Pédagogique</a></li>
          <li class="">
            <a class="colorwhite amodel3">Espace Administratif</a>
          </li>
        </ul>

        <form class="d-flex" action="">
          <input class="form-control me-2" type="text" placeholder="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "NavBarre",
  props: {},
};
</script>

<style scoped>
/* model 1 */
/* .amodel1:hover {
  background-color: #c9c9c9;
  color: #343a40;
} */

.amodel1:hover {
  text-decoration: underline;
}


.background-color343a40 {
  background-color: #343a40;
}

.colorwhite {
  color: white;
}
/* end model 1 */

/* model 2 */
.amodel2:hover {
  background-color: #343a40;
  color: #c9c9c9;
}

.background-colorc9c9c9 {
  background-color: #c9c9c9;
}

.colorwhite {
  color: white;
}
/* end model 2 */

/* model 3 */

.amodel3:hover {
  border-color: white;
  border-top: 0.5mm solid white;
  border-bottom: 0.5mm solid white;
}

.background-color343a40 {
  background-color: #343a40;
}

.colorwhite {
  color: white;
}
/* end model 3 */

/* général */
.model {
  margin-top: 10em;
}

.disconnect {
  text-align: right;
}
.disconnect > a {
  margin-right: 2em;
}

nav {
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5em;
}

.menu {
  list-style-type: none;
  max-width: 1222px;
  margin-top: 0.5em;
  font-size: 1.5625em;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}

li {
  display: list-item;
}

.menu > li > a {
  display: block;
  text-decoration: none;
  transition: all 400ms;
  padding: 0 1em;
  margin-right: 2em;
}

img {
  height: 48px;
  transform: scale(3.5);
  max-width: 100%;
  border: 0;
  margin: 0.5em;
}

input {
  width: 20em;
  margin-right: 2em;
}

button {
  margin-right: -6em;
}

/* end général */
</style>
