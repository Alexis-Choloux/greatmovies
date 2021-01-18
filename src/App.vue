<template>
  <div id="app">
    <NavBar />

    <div v-if="$route.path == '/index.html'">
      <AllMoviesList :results="results" :loading="loading" :errored="errored" />
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
      results: [],
      loading: true,
      errored: false,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&certification_country=US&certification.lte=G&sort_by=popularity.desc"
      )
      .then((results) => {
        this.results = results.data.results;
      });
  },
  methods: {
    genreFilter(number) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&certification_country=US&certification.lte=G&sort_by=vote_average.desc&region=fr&with_genres=" +
            number
        )
        .then((results) => {
          this.results = results.data.results;
        });
    },
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
