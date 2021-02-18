import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
     
    }
  },
  mutations: {

    storeData(state, payload) {
      state.data = payload
  
    }
  },
  actions: {

     async sendData(context, payload) {

      const user = await API.registerUser(payload.name, payload.email)
      context.commit('storeData', user)
      
    }



  },
})
