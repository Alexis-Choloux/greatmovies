<template>
  <div id="app">
    <NavBar />

    <div v-if="$route.path == '/index.html'">
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
    };
  },
  methods: {
    getAllMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=robot&sort_by=popularity.desc&page=1"
        )
        .then((response) => {
          component.movies = response.data.results;

          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=robot&sort_by=popularity.desc&page=2"
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=robot&sort_by=popularity.desc&page=3"
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=robot&sort_by=popularity.desc&page=4"
            )
            .then((response) => {
              response.data.results.forEach((movie) => {
                component.movies.push(movie);
              });
            });
          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&query=robot&sort_by=popularity.desc&page=5"
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
</style>
