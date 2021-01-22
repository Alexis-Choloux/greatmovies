<template>
  <div id="app">
    <NavBar :method="parentMethod" />

    <div class="row">
      <div class="col-md-3 offset-md-8 fixed-top">
        <form class="d-flex mt-2">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Recherche"
            aria-label="Recherche"
            v-model="query"
            @keyup="getResult(query)"
          />
          <button class="btn btn-outline-info" type="submit">Search</button>
        </form>
      </div>
    </div>

    <div v-if="$route.path == '/'">
      <div v-if="parameter == ''">
        <div class="homeElement animate__animated animate__fadeIn">
          <img alt="Vue logo" src="./assets/logo.png" height="100px" />
        </div>
        <h1 class="mt-3">- Great Movies -</h1>
        <div class="animate__animated animate__fadeIn">
          <h3>Tous les films du moment</h3>
        </div>
      </div>

      <div v-if="parameter == '&year=2020'">
        <div class="homeElement animate__animated animate__fadeIn">
          <img alt="Vue logo" src="./assets/2020.png" height="100px" />
        </div>
        <h1 class="mt-3">- Great Movies -</h1>
        <div class="animate__animated animate__fadeIn">
          <h3>Les films de 2020</h3>
        </div>
      </div>

      <div v-if="parameter == '&with_original_language=fr'">
        <div class="homeElement animate__animated animate__fadeIn">
          <img alt="Vue logo" src="./assets/french.png" height="100px" />
        </div>
        <h1 class="mt-3">- Great Movies -</h1>
        <div class="animate__animated animate__fadeIn">
          <h3>Les films français du moment</h3>
        </div>
      </div>

      <div v-if="parameter == '&with_original_language=en'">
        <div class="homeElement animate__animated animate__fadeIn">
          <img alt="Vue logo" src="./assets/usa.png" height="100px" />
        </div>
        <h1 class="mt-3">- Great Movies -</h1>
        <div class="animate__animated animate__fadeIn">
          <h3>Les films américains du moment</h3>
        </div>
      </div>

      <div v-if="parameter == '&sort_by=vote_count.desc'">
        <div class="homeElement animate__animated animate__fadeIn">
          <img alt="Vue logo" src="./assets/top.webp" height="100px" />
        </div>
        <h1 class="mt-3">- Great Movies -</h1>
        <div class="animate__animated animate__fadeIn">
          <h3>Les 100 meilleurs films</h3>
        </div>
      </div>

      <div v-if="query" class="animate__animated animate__fadeInDown">
        <h2 class="mt-4 text-secondary">Recherche pour "{{ search }}"</h2>
      </div>

      <AllMoviesList :movies="movies" :loading="loading" />
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>


<script>
import AllMoviesList from "./components/AllMoviesList";
import NavBar from "./components/NavBar";
import axios from "axios";

export default {
  name: "App",
  components: {
    AllMoviesList,
    NavBar,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,

      parameter: "",
      query: "",
      search: "empty",
    };
  },
  methods: {
    parentMethod(valueFromChild) {
      this.parameter = valueFromChild;
      this.getAllMovies(this);
    },
    getResult(query) {
      if (query == "") {
        this.search = "empty";
      } else {
        this.search = query;
        this.getAllMovies(this);
      }
    },
    getAllMovies(component) {
      if (this.search == "empty") {
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&language=fr-FR&page=1" +
              this.parameter
          )
          .then((response) => {
            component.movies = response.data.results;

            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&language=fr-FR&page=2" +
                  this.parameter
              )
              .then((response) => {
                response.data.results.forEach((movie) => {
                  component.movies.push(movie);
                });
              });
            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&language=fr-FR&page=3" +
                  this.parameter
              )
              .then((response) => {
                response.data.results.forEach((movie) => {
                  component.movies.push(movie);
                });
              });
            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&language=fr-FR&page=4" +
                  this.parameter
              )
              .then((response) => {
                response.data.results.forEach((movie) => {
                  component.movies.push(movie);
                });
              });
            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&language=fr-FR&page=5" +
                  this.parameter
              )
              .then((response) => {
                response.data.results.forEach((movie) => {
                  component.movies.push(movie);
                  console.log(this.movies);
                });
              });
          });
      } else {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=" +
              this.search
          )
          .then((response) => {
            component.movies = response.data.results;
          });
      }
    },
  },
  created() {
    this.getAllMovies(this);
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
}

@media (max-width: 992px) {
  .homeElement {
    margin-top: 50px;
  }
  .fixed-top {
    background-color: rgb(52,58,64);
  }
}
</style>
