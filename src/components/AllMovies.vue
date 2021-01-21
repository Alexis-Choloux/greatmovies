<template>
  <tr>
    <th scope="row">
      <router-link :to="{path: '/movie/' + movie.id }" class="nav-item">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          width="100px"
        />
      </router-link>
    </th>

    <td>
      {{ movie.original_title }}
    </td>
    <td>
      {{ movie.vote_average }}
    </td>
    <td>
      {{ movie.overview }}
    </td>
    <td>
      {{ movie.release_date | moment("DD/MM/YYYY") }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "AllMovies",
  props: ["movie", "title", "note", "overview", "poster", "date"],
};
</script>


<style scoped>
</style>