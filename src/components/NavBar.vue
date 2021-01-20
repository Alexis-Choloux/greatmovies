<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Great Movies</a>
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
              <router-link to="/top-of-year" class="routerLink">
                2020
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/top-of-year" class="routerLink">
                Français
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/top-of-year" class="routerLink">
                Américains
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/top-of-year" class="routerLink">
                Top 50
              </router-link>
            </li>

          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
  color: white;
  margin-left: 20px;
}
</style>