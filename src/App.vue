<template>
  <div id="app">
    <!-- <NavBar @send-parameter="getAllMovies" /> -->

    <NavBar :method="parentMethod" />

    <div v-if="$route.path == '/'">
      <div v-if="parameter == ''">
        <img alt="Vue logo" src="./assets/logo.png" height="200px" />
        <h1>- Great Movies -</h1>
        <h3>Tous les films du moment</h3>
      </div>

      <div v-if="parameter == '&year=2020'">
        <img alt="Vue logo" src="./assets/2020.png" height="200px" />
        <h1>- Great Movies -</h1>
        <h3>Les films de 2020</h3>
      </div>

      <div v-if="parameter == '&with_original_language=fr'">
        <img alt="Vue logo" src="./assets/french.png" height="200px" />
        <h1>- Great Movies -</h1>
        <h3>Les films français du moment</h3>
      </div>

      <div v-if="parameter == '&with_original_language=en'">
        <img alt="Vue logo" src="./assets/usa.png" height="200px" />
        <h1>- Great Movies -</h1>
        <h3>Les films américains du moment</h3>
      </div>

      <div v-if="parameter == '&sort_by=vote_count.desc'">
        <img alt="Vue logo" src="./assets/top.webp" height="200px" />
        <h1>- Great Movies -</h1>
        <h3>Les 100 meilleurs films</h3>
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
      frenchMovies: "&with_original_language=fr",
      americanMovies: "&with_original_language=en",
    };
  },
  methods: {
    parentMethod(valueFromChild) {
      this.parameter = valueFromChild;
      this.getAllMovies(this);
    },
    getAllMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&page=1" +
            this.parameter
        )
        .then((response) => {
          component.movies = response.data.results;

          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&page=2" +
                this.parameter
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&page=3" +
                this.parameter
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&page=4" +
                this.parameter
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&sort_by=popularity.desc&page=5" +
                this.parameter
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
                console.log(this.movies);
              });
            });
        });
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
</style>
