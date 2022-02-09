const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  // state, getters, rootState
  filter: (state) => {
    return state.items.filter(({ a }) => {
      return a >= 2
    })
  }
}

// actions
const actions = {
  // commit, state
  getAll({ commit }) {
    setTimeout(() => {
      commit('setItems', { items: [{ a: 1 }, { a: 2 }] })
    }, 2000);
  },

  addItem({ commit }, item) {
    commit('setCheckoutStatus', true)
    setTimeout(() => {
      commit('addItems', { item })
      commit('setCheckoutStatus', null)
    }, 2000);
  }
}

// mutations
const mutations = {
  setItems(state, { items }) {
    state.items = items
  },
  addItems(state, { item }) {
    state.items.push(item)
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}