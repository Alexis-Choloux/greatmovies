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
        <td>
      {{ date }}
    </td>
  </tr>
</template>

<script>
export default {
    name: 'AllMovies',
    props: ["title", "note", "overview", "poster", "date"],
}
</script>


<style scoped>

</style>