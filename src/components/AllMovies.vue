<template>
  <tr>
    <th scope="row">
        <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster" width='100px'>
    </th>
    <td>
      {{ title }}
    </td>
    <td>
      {{ note }}
    </td>
    <td>
      {{ overview }}
    </td>
  </tr>
</template>

<script>
export default {
    name: 'AllMovies',
    props: ["title", "note", "overview", "poster"],
}
</script>


<style scoped>

</style>