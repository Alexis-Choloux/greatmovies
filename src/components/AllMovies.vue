<template>
  <div class="container">
    <h3>Meilleurs films pour toute la famille :</h3>

    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Titre original</th>
          <th scope="col">Note</th>
          <th scope="col">Résumé</th>
        </tr>
      </thead>
      <tbody v-for="result in results" :key="result.id">
        <tr>
          <th scope="row">
            <img
              v-bind:src="
                'http://image.tmdb.org/t/p/w500/' + result.poster_path
              "
              width="100px"
            />
          </th>
          <td>
            {{ result.original_title }}
          </td>
          <td>
            {{ result.vote_average }}
          </td>
          <td>
            {{ result.overview }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AllMovies",
  data() {
    return {
      results: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&certification_country=US&certification.lte=G&sort_by=popularity.desc"
      )
      .then((results) => {
        this.results = results.data.results;
        console.log(this.results);
      });
  },
};
</script>


<style scoped>
</style>