export const state = () => ({
  movieSearchTerm: '',
})

export const mutations = {
  add(state, text) {
    state.movieSearchTerm = text
  },
}
