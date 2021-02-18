import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {

    sendData(state, payload) {

      payload.id = Date.now();
      state.data.push(payload)
    }
  },
  actions: {
  },
})
