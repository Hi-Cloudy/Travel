import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

// let defaultCity = '上海'

// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {
//   // TODO handle the exception
// }

// export default new Vuex.Store({
//   state: {
//     city: localStorage.city || defaultCity
//   },
//   actions: {
//     changeCity (ctx, city) {
//       console.log(city)
//       ctx.commit('changeCity', city)
//     }
//   },
//   mutations: {
//     changeCity (state, city) {
//       console.log(city)
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e) {
//         // TODO handle the exception
//       }
//     }
//   }
// })
