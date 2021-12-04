<template>
  <div class="block mt-12 text-center">
    <button
      class=" bg-amber-500 active:bg-amber-300 hover:shadow-lg focus:outline-none w-50 px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none"
      type="button"
      aria-pressed="false"
      @click.prevent="clearForm"
    >
      Back to Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    clearForm() {
      this.$emit('clear-form')
    },
  },
}
</script>

<style></style>
