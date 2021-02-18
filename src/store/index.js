import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
     
    },

    coffeTypes: []
  },
  mutations: {

    storeData(state, payload) {
      state.data = payload
  
    },

    storeCoffeData(state, payload) {
      state.coffeTypes = payload;
      console.log(state.coffeTypes)
    }
  },
  actions: {

     async getCoffeTypes(context) {
       const coffeList = await API.fetchProducts();
       context.commit('storeCoffeData', coffeList)
     },

     async sendData(context, payload) {

      const user = await API.registerUser(payload.name, payload.email)
      context.commit('storeData', user)
      
    }



  },
})
