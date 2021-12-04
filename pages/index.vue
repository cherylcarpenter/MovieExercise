<template>
  <div>
    <main>
      <section class="relative w-full h-full min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-white bg-repeat bg-25%"
          :style="`background-image: url('${registerBg2}'); overflow-x: scroll;`"
        >
          <div
            class=" bg-opacity-60 absolute top-0 w-full h-full bg-white bg-repeat"
            :style="`overflow-x: scroll;`"
          >
            <Search
              v-if="!movies || movies.length === 0"
              :none-found="noneFound"
              @lookup-movies="lookupMovies"
            />
            <div v-if="movies" class="movie-tiles container py-40 mx-auto">
              <div class="flex flex-wrap justify-center h-full px-6">
                <Movie
                  v-for="movie in movies"
                  :key="movie.imdbID"
                  :movie="movie"
                />
              </div>
              <Pagination
                v-if="movies && movies.length !== 0 && totalResults > 10"
                :total-results="{ totalResults }"
                :page-number="{ pageNumber }"
                :total-pages="{ totalPages }"
                @nextClicked="handleNext"
                @previousClicked="handlePrevious"
              />
              <BackButton
                v-if="movies && movies.length !== 0"
                @clear-form="clearForm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import BackButton from '../components/BackButton.vue'
import Search from '../components/Search.vue'
import Pagination from '../components/Pagination.vue'
import Movie from '../components/Movie.vue'
import registerBg2 from '~/assets/img/AdobeStock_241041480_Preview.png'

export default {
  components: { BackButton, Search, Movie, Pagination },
  data() {
    return {
      registerBg2,
      movies: [],
      movieSearchTerm: '',
      noneFound: false,
      errors: [],
      totalPages: null,
      pageNumber: 1,
      totalResults: 0,
      state: {},
    }
  },
  methods: {
    async lookupMovies(e) {
      this.movieSearchTerm = e.movieSearchTerm
      const MOVIE_API_URL = `https://www.omdbapi.com/?s=${this.movieSearchTerm}&apikey=9e22caae&page=${this.pageNumber}`
      await this.$axios
        .get(MOVIE_API_URL)
        .then((response) => {
          this.movies = response.data.Search
          this.totalResults = response.data.totalResults
          this.totalPages = this.totalResults / 10
          if (this.movies === undefined) this.noneFound = true
        })
        .catch(function (error) {
          this.noneFound = true
          this.movies = []
          this.errors = error.response.data
        })
    },
    async updateMovies() {
      const MOVIE_API_URL = `https://www.omdbapi.com/?s=${this.movieSearchTerm}&apikey=9e22caae&page=${this.pageNumber}`
      await this.$axios
        .get(MOVIE_API_URL)
        .then((response) => {
          this.movies = response.data.Search
          this.totalResults = response.data.totalResults
          this.totalPages = this.totalResults / 10
          if (this.movies === undefined) this.noneFound = true
        })
        .catch(function (error) {
          this.noneFound = true
          this.movies = []
          this.errors = error.response.data
        })
    },
    handleNext() {
      if (this.movies && this.pageNumber < this.totalPages) {
        this.pageNumber = this.pageNumber += 1
        this.lookupMovies(this.pageNumber)
      }
    },
    handlePrevious() {
      if (this.movies && this.pageNumber > 1) {
        this.pageNumber = this.pageNumber - 1
        this.lookupMovies(this.pageNumber)
      }
    },
    clearForm() {
      this.noneFound = false
      this.movies = []
      this.totalResults = 0
    },
  },
}
</script>
