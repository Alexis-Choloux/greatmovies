<template>
  <div class="container mt-3 text-white">

    <img alt="Vue logo" src="../assets/logo.png" height="200px" />

    <h1>- Robot Movie Titles -</h1>
    <h3>Tous les films avec un "Robot" dans le titre</h3>

  <FilterButtons />

    <table class="table mt-5 table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Titre original</th>
          <th scope="col">Note</th>
          <th scope="col">Résumé</th>
        </tr>
      </thead>

      <tbody v-for="movie in movies" :key="movie.id">
        <AllMovies
          :title="movie.original_title"
          :note="movie.vote_average"
          :overview="movie.overview"
          :poster="movie.poster_path"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import AllMovies from "./AllMovies.vue";
import FilterButtons from "./FilterButtons";

export default {
  name: "AllMoviesList",
  components: { AllMovies, FilterButtons },
  props: ["movies", "loading"]
};
</script>
