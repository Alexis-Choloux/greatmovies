<template>
  <div class="container mt-5 text-white">

    <FilterButtons
      :movies="movies"
    />

    <table class="table mt-2 table-dark table-striped table-sm table-hover">

      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Titre</th>
          <th scope="col">Note</th>
          <th scope="col" width="65%" class="displayElement">Résumé</th>
          <th scope="col" width="10%" class="displayElement">Sortie</th>
        </tr>
      </thead>

      <tbody v-for="movie in movies" :key="movie.id">
        <AllMovies
          :movie="movie"
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
  props: ["movies", "loading"],
};
</script>

<style scoped>
@media (max-width: 992px) {
  .displayElement {
    display: none;
  }
}
</style>