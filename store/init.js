export const actions = {
  async serverSideFetcher ({ commit }) {
    try {
      console.log('serverSideFetcher from init')
      const { results } = await this.$axios.$get('/')
      commit('user/SET_USER', results[0], { root: true })
      commit('user/SET_TOKEN', results[0].login.uuid, {
        root: true
      })
    } catch (error) {
      console.log(error)
    }
  }
}
