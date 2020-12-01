import * as service from './service'

const state = () => ({})
const getters = {}
const mutations = {}
const actions = {
  async GET_EXAMPLE ({ dispatch, commit }) {
    const result = await dispatch('API', { reqContext: service.example() })
    commit('SET_EXAMPLE', result.data)
    return result
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
