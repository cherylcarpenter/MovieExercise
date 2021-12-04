<template>
  <div class="single-movie">
    <div
      class=" bg-blueGray-200 relative flex flex-col w-full h-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg"
    >
      <div class="h-full px-6 py-6 mb-0 rounded-t">
        <div class="h-full mb-3 text-center">
          <h1 class="mb-8 text-2xl">{{ movie.Title }}</h1>
          <img
            :src="movie.Poster"
            :alt="movie.Title"
            class="m-auto mb-3"
            aria-details="publicationYear"
          />
          <caption id="publicationYear" class="block text-center">
            <p>Released: {{ movie.Year }}</p>
            <p>id: {{ movie.imdbID }}</p>
            <p>type: {{ movie.Type }}</p>
          </caption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    clearForm() {
      this.$emit('clear-form')
    },
  },
}
</script>

<style>
.single-movie {
  flex: 0 0 25%;
  margin: 1rem;
}
</style>
