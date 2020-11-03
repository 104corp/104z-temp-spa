const state = () => ({
  window: {
    width: 0,
    height: 0
  },
  client: {
    width: 0,
    height: 0
  },
  scroll: {
    top: 0,
    left: 0
  },
  isMobile: false
})

const getters = {
  orientation: state => state.window.width > state.window.height ? 'landscape' : 'portrait'
}

const mutations = {
  SET_DEVICE (state, data) {
    state.isMobile = data
  },
  SET_SIZE (state, { width = 0, height = 0, type = 'window' }) {
    state[type].width = width
    state[type].height = height
  },
  SET_SCROLL (state, { top = 0, left = 0 }) {
    state.scroll.top = top
    state.scroll.left = left
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
