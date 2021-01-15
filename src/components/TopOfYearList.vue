<template>
  <div class="container mt-3 text-white">
    <h1>- Family Films -</h1>
    <h3>Les films de 2020</h3>

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
import axios from "axios";
import AllMovies from "./AllMovies.vue";

export default {
  name: "TopOfYearList",
  components: { AllMovies },

  data() {
    return {
      results: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=425a1fc1e63b59c9506906d18d8ed1a2&certification_country=US&certification.lte=G&sort_by=popularity.desc&year=2020"
      )
      .then((results) => {
        this.results = results.data.results;
        console.log(this.results);
      });
  },
};
</script>
