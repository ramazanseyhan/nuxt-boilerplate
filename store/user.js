export const state = () => ({
  token: null,
  user: null
})
export const mutations = {
  SET_TOKEN: (state, payload) => {
    state.token = payload
  },
  SET_USER: (state, payload) => {
    state.user = payload
  }
}
export const getters = {
  getToken: state => state.token,
  getUser: state => state.user
}
