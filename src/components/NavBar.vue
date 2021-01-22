<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand"> Great Movies </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
              <button
                v-on:click="sendData('')"
                class="btn btn-dark"
                type="submit"
                value="submit"
              >
                Accueil
              </button>
            </li>

            <li class="nav-item">
              <button
                v-on:click="sendData('&year=2020')"
                class="btn btn-dark"
                type="submit"
                value="submit"
              >
                2020
              </button>
            </li>

            <li class="nav-item">
              <button
                v-on:click="sendData('&with_original_language=fr')"
                class="btn btn-dark"
                type="submit"
                value="submit"
              >
                Français
              </button>
            </li>

            <li class="nav-item">
              <button
                v-on:click="sendData('&with_original_language=en')"
                class="btn btn-dark"
                type="submit"
                value="submit"
              >
                Américains
              </button>
            </li>

            <li class="nav-item">
              <button
                v-on:click="sendData('&sort_by=vote_count.desc')"
                class="btn btn-dark"
                type="submit"
                value="submit"
              >
                Top 100
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    method: { type: Function },
  },
  data() {
    return { value: "I am the child." };
  },
  methods: {
    sendData(value) {
      this.method(value);
    },
  },
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  color: white;
  margin-left: 20px;
}
li {
  margin-right: 10px;
}
</style>