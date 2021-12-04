<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            w-full
            mb-6
            shadow-lg
            rounded-lg
            bg-blueGray-200
            border-0
          "
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h1 class="text-3xl">Movie Lookup</h1>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label
                  id="movieSearch"
                  class="
                    block
                    uppercase
                    text-blueGray-600 text-xs
                    font-bold
                    mb-2
                  "
                >
                  Enter a Movie Title
                </label>
                <input
                  v-model.trim="form.movieSearchTerm"
                  type="text"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none
                    focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  :class="noneFound ? '' : 'mb-2'"
                  placeholder="Movie Title"
                  aria-labelledby="movieSearch"
                  @input="clearForm"
                />
              </div>
              <span v-if="noneFound" class="error text-xs text-movieRed-100"
                >Please try a different search</span
              >

              <div class="text-center mt-6">
                <button
                  class="
                    bg-amber-500
                    text-white
                    active:bg-amber-300
                    text-sm
                    font-bold
                    uppercase
                    px-6
                    py-3
                    rounded
                    shadow
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="submit"
                  aria-pressed="false"
                  @click.prevent="lookupMovies"
                >
                  Lookup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    noneFound: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        movieSearchTerm: '',
      },
      movies: [],
      statusMsg: '',
    }
  },
  methods: {
    clearForm() {
      this.movies = []
    },
    lookupMovies() {
      this.$emit('lookup-movies', this.form)
    },
  },
}
</script>
<style scoped>
</style>