<template>
  <div class="container mt-3 text-white">

    <img alt="Vue logo" src="../assets/logo.png" height="200px" />

    <h1>- Family Films -</h1>
    <h3>Les films pour toute la famille</h3>

    <button
      v-on:click="genreFilter(28)"
      class="btn btn-secondary"
      type="submit"
      value="submit"
    >
      Action
    </button>

    <table class="table mt-5 table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Titre original</th>
          <th scope="col">Note</th>
          <th scope="col">Résumé</th>
        </tr>
      </thead>

      <tbody v-for="result in results" :key="result.id">
        <AllMovies
          :title="result.original_title"
          :note="result.vote_average"
          :overview="result.overview"
          :poster="result.poster_path"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import AllMovies from "./AllMovies.vue";

export default {
  name: "AllMoviesList",
  components: { AllMovies },
};
</script>
