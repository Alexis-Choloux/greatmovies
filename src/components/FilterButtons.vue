<template>
<div>
  <button
    v-on:click="genreFilter(28)"
    class="btn btn-secondary"
    type="submit"
    value="submit"
  >
    Action
  </button>

    <button
    v-on:click="genreFilter(28)"
    class="btn btn-secondary"
    type="submit"
    value="submit"
  >
    Aventure
  </button>
</div>
</template>

<script>
export default {
  name: "FilterButtons",
  props: ["movies"],
  methods: {
    yearFilter() {

    }
  },
};
</script>