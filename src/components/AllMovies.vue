<template>
  <tr id="table">
    <th scope="row" id="poster">
      <router-link :to="{ path: '/movie/' + movie.id }" class="nav-item">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          width="100px"
        />
      </router-link>
    </th>

    <td class="tableElement">
      <b>{{ movie.title }}</b>
      <p class="displayOtherElement">
        {{ movie.overview}}
      </p>
    </td>
    <td class="tableElement" id="tableAverage">
      {{ movie.vote_average }}
    </td>
    <td class="tableElement displayElement">
      <p>
      {{ movie.overview }}
      </p>
    </td>
    <td class="tableElement text-secondary displayElement">
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
p {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 140px;
  margin: 0 20px 0 20px;
  text-align: justify;
  color: rgb(226, 225, 225);
  }

.tableElement {
  vertical-align: middle;
}

#tableAverage {
  color: rgb(223, 195, 35);
}

@media (max-width: 992px) {
  .displayElement {
    display: none;
  }
  #poster {
    vertical-align: middle;
  }
}

@media (min-width: 992px) {
  .displayOtherElement {
    display: none;
  }
}
</style>