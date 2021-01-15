<template>
  <div id="app">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png" height="200px" />

    <router-link to="/top-of-year">
      <button
        style="background-color: #41b883"
        class="btn btn-success mr-1 mb-2"
      >
        Top 2020
      </button>
    </router-link>

    <AllMoviesList />
  </div>
</template>


<script>
import AllMoviesList from "./components/AllMoviesList";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    AllMoviesList,
    NavBar,
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
