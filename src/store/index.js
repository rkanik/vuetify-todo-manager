import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./modules"
import createLogger from "vuex/dist/logger"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const initialState = () => ({
   signedIn: false
})

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
   modules,
   actions: {
   },
   mutations: {
      setState: (state, payload) => {
         Object.keys(payload).forEach(key => state[key] = payload[key])
      },
      setRootState: (state, payload) => {
         Object.keys(payload).forEach(key => state[key] = payload[key])
      }
   },
   state: initialState(),
   getters: {
      signedIn: state => state.signedIn
   },

   plugins: [createPersistedState(), debug && createLogger()]
})
