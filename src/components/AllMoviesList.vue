<template>
  <div class="container mt-3 text-white">

    <FilterButtons
      :movies="movies"
    />

    <table class="table mt-5 table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Titre original</th>
          <th scope="col">Note</th>
          <th scope="col" width="65%">Résumé</th>
          <th scope="col" width="10%">Sortie</th>
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
