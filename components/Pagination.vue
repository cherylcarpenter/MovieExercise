<template>
  <div class="w-full my-6 text-center">
    {{ searchTerm }}
    <a
      v-if="showPrevious"
      href="#"
      class=" hover:bg-teal-500 relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-900 border border-teal-300 rounded-md"
      @click="handlePrevious"
    >
      Previous
    </a>
    <a
      v-if="showNext"
      href="#"
      class=" hover:bg-teal-500 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-teal-900 border border-teal-300 rounded-md"
      @click="handleNext"
    >
      Next
    </a>
  </div>
</template>

<script>
export default {
  props: {
    totalResults: {
      type: Object,
      default() {
        return {}
      },
    },
    pageNumber: {
      type: Object,
      default() {
        return {}
      },
    },
    totalPages: {
      type: Object,
      default() {
        return {}
      },
    },
    searchTerm: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    showNext() {
      return this.pageNumber.pageNumber < this.totalPages.totalPages
    },
    showPrevious() {
      return this.pageNumber.pageNumber > 1
    },
  },
  methods: {
    handleNext() {
      this.$emit('nextClicked', this.searchTerm)
    },
    handlePrevious() {
      this.$emit('previousClicked', this.searchTerm)
    },
  },
}
</script>

<style></style>
