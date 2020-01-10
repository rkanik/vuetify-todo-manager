import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./modules"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const initialState = () => ({
   signedIn: false
})

export default new Vuex.Store({
   modules,
   actions: {
   },
   mutations: {
      setState: (state, payloads) => {
         Object.keys(payloads).forEach(key => state[key] = payloads[key])
      }
   },
   state: initialState(),
   getters: {
      signedIn: state => state.signedIn
   },
   plugins: [createPersistedState()]
})
