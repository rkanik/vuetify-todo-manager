
import router from "../../router"

const initialState = () => ({
   username: ""
})
const actions = {
   signinAdmin: ({ commit }, payload) => {
      if (payload.username === "RKAnik" && payload.password === "1234") {
         commit("setState", { username: payload.username })
         commit("setRootState", { signedIn: true }, { root: true })
         router.push("/")
      } else {
         console.log("invalid username and pass")
      }
   },
   signoutAdmin: ({ commit }) => {
      router.push("/signin")
      commit("setState", { username: "" })
      commit("setRootState", { signedIn: false }, { root: true })
   }
}

const mutations = {
   setState: (state, payload) => {
      Object.keys(payload).forEach(key => state[key] = payload[key])
   },
   resetState: (state) => {
      let newState = initialState()
      Object.keys(newState).forEach(key => state[key] = newState[key])
   }
}
const state = initialState()
const getters = {}

export default {
   namespaced: true,
   state, getters, mutations, actions
}