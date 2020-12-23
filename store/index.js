export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('init/serverSideFetcher')
  }
}
