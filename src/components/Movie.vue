<template>
  <div class="container">
    <div class="row fixed-top bg-dark">
      <router-link to="/" id="router">
        <div class="col-md-2 offset-md-1 d-flex align-items-center">
          <i class="fas fa-caret-left fa-4x"></i>
          <p>Retour</p>
        </div>
      </router-link>
    </div>

    <div class="row">
      <div class="col-md-4 right">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          width="400px"
        />
      </div>

      <div class="col-md-6">
        <div>
          <h1>{{ movie.title }}</h1>
        </div>

        <div class="d-flex">
          <img src="../assets/imdb.png" height="20px" id="imdb" />
          <p>{{ movie.vote_average }}</p>
        </div>

        <div>
          <p class="text-secondary">
            Contenu pour adulte :
            <span v-if="movie.adult == 'true'"> Oui </span>
            <span v-else> Non </span>
          </p>
        </div>

        <div>
          <h5>{{ movie.tagline }}</h5>
          <p>{{ movie.overview }}</p>
        </div>

        <div id="otherInformation">
          <p>
            Date de sortie :
            <span>{{ movie.release_date | moment("DD/MM/YYYY") }}</span>
          </p>
          <p>
            Langue originale : <span>{{ movie.original_language }}</span>
          </p>
          <p>
            Budget : <span>{{ movie.budget }} $</span>
          </p>
          <div v-if="movie.homepage" id="link">
            <a v-bind:href="movie.homepage" target="_blank">Lien officiel</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie",
  data() {
    return {
      idMovie: this.$route.params.id,
      movie: [],
    };
  },
  methods: {
    getMovie(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.idMovie +
            "?api_key=425a1fc1e63b59c9506906d18d8ed1a2"
        )
        .then((response) => {
          component.movie = response.data;
          console.log(component.movie);
        });
    },
  },
  created() {
    this.getMovie(this);
  },
};
</script>


<style scoped>
#router {
  text-decoration: none;
  color: white;
  transition: 1s;
}
#router:hover {
  color: rgb(80, 79, 79);
  transition: 1s;
}

.fixed-top p {
  margin: 0 0 0 10px;
  font-size: 25px;
}

.container {
  color: white;
  margin-top: 30px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  text-align: left;
}

#imdb {
  margin: 2px 10px 0 0;
}

#otherInformation {
  margin-top: 50px;
  color: grey;
}

#otherInformation span {
  color: rgb(179, 179, 179);
}

#link {
  text-align: left;
}
</style>