<template>
  <div>
    <button
      v-on:click="alphabeticSorting()"
      class="btn btn-sm btn-secondary"
      type="submit"
      value="submit"
    >
      Tri alphabétique
    </button>

    <button
      v-on:click="dateSorting()"
      class="btn btn-sm btn-secondary"
      type="submit"
      value="submit"
    >
      Tri par date
    </button>

    <button
      v-on:click="noteSorting()"
      class="btn btn-sm btn-secondary"
      type="submit"
      value="submit"
    >
      Tri par note
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterButtons",
  props: ["movies"],
  data() {
    return {
      alphabeticCheck: false,
      dateCheck: false,
      noteCheck: false,
    };
  },
  methods: {
    alphabeticSorting() {
      if (this.alphabeticCheck) {
        this.movies.sort((a, b) => {
          this.alphabeticCheck = false;
          if (a.original_title > b.original_title) return -1;
          if (a.original_title < b.original_title) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.alphabeticCheck = true;
          if (a.original_title < b.original_title) return -1;
          if (a.original_title > b.original_title) return 1;
          return 0;
        });
      }
    },

    dateSorting() {
      if (this.dateCheck) {
        this.movies.sort((a, b) => {
          this.dateCheck = false;
          if (a.release_date > b.release_date) return -1;
          if (a.release_date < b.release_date) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.dateCheck = true;
          if (a.release_date < b.release_date) return -1;
          if (a.release_date > b.release_date) return 1;
          return 0;
        });
      }
    },
        noteSorting() {
      if (this.noteCheck) {
        this.movies.sort((a, b) => {
          this.noteCheck = false;
          if (a.vote_average < b.vote_average) return -1;
          if (a.vote_average > b.vote_average) return 1;
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.noteCheck = true;
          if (a.vote_average > b.vote_average) return -1;
          if (a.vote_average < b.vote_average) return 1;
          return 0;
        });
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
  margin-top: 20px;
}
</style>