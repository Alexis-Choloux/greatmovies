<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="200px">
    <AllMovies />
  </div>
</template>

<script>
import AllMovies from './components/AllMovies'

export default {
  name: 'App',
  components: {
    AllMovies
  }
}
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
