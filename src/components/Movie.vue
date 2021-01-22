<template>
  <div class="container">
    <div class="row fixed-top bg-dark">
      <div class="col-6">
        <router-link to="/" id="router">
          <div class="col-md-2 offset-md-1 d-flex align-items-center animate__animated animate__fadeInRight  animate__delay-2s">
            <i class="fas fa-caret-left fa-4x"></i>
            <p>Retour</p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 right animate__animated animate__fadeInLeft">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          width="400px"
          class="shadow"
        />
      </div>

      <div class="col-md-7 animate__animated animate__fadeIn animate__delay-1s">
        <div class="d-flex">
          <h1>{{ movie.title }}</h1>

          <div v-if="similars[0]">
            <b-button
              v-b-modal.modal-xl
              variant="secondary"
              size="sm"
              id="modalBtn"
              >Films similaires</b-button
            >

            <b-modal id="modal-xl" size="xl" title="Extra Large Modal">
              <b-row id="similarMovies">
                <b-col md="4" v-for="similar in similars" :key="similar.id">
                  <b-card
                    v-bind:title="similar.title"
                    v-bind:img-src="
                      'http://image.tmdb.org/t/p/w500/' + similar.poster_path
                    "
                    img-alt="Image"
                    img-height="450px"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
                    id="cardHeight"
                  >
                    <b-card-text id="similarOverview">
                      {{ similar.overview }}
                    </b-card-text>

                    <div class="d-flex justify-content-between">
                      <p>...</p>
                      <router-link
                        :to="{ path: '/movie/' + similar.id }"
                        class="btn btn-outline-dark"
                      >
                        Consulter
                      </router-link>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </b-modal>
          </div>
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

        <div class="row">
          <div class="col-md-5">
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
                <a v-bind:href="movie.homepage" target="_blank"
                  >Lien officiel</a
                >
              </div>
            </div>
          </div>

          <div class="col-md-7" id="trailer" v-if="video.results[0]">
            <iframe
              width="340"
              height="190"
              v-bind:src="
                'https://www.youtube.com/embed/' + video.results[0].key
              "
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="shadow"
            ></iframe>
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
      video: [],
      similars: [],
    };
  },
  methods: {
    getMovie(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.idMovie +
            "?api_key=425a1fc1e63b59c9506906d18d8ed1a2&language=fr-FR"
        )
        .then((response) => {
          component.movie = response.data;
        });
    },
    getVideo(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.idMovie +
            "/videos?api_key=425a1fc1e63b59c9506906d18d8ed1a2&language=fr-FR"
        )
        .then((response) => {
          component.video = response.data;
        });
    },
    getSimilars(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.idMovie +
            "/similar?api_key=425a1fc1e63b59c9506906d18d8ed1a2&language=fr-FR"
        )
        .then((response) => {
          component.similars = response.data.results;
          console.log(component.similars);
        });
    },
  },
  created() {
    this.getMovie(this);
    this.getVideo(this);
    this.getSimilars(this);
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

h4 {
  color: rgb(53, 53, 53);
}

#modalBtn {
  margin-left: 15px;
  height: 28px;
}

#cardHeight {
  height: 673px;
}

#similarOverview {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 75px;
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

#trailer {
  margin-top: 30px;
}

@media (max-width: 992px) {
  .fixed-top {
    margin-top: -10px;
  }
  img {
    margin-top: 10px;
    width: 90%;
  }
  #modalBtn {
    height: auto;
    margin-top: 10px;
  }
  #imdb {
    width: auto;
  }
}
</style>