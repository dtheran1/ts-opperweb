import { createStore } from 'vuex'
const store = createStore({
  modules: {
  },
  state: {
    isLogued: false,
    user: {
      email: '',
      password: '',
      apiKey: '',
      utcTimeStamp: '',
      signature: '',
    },
    categories: [
      {
        id: 1,
        name: 'ACCIÓN'
      },
      {
        id: 2,
        name: 'AVENTURA'
      },
      {
        id: 3,
        name: 'COMEDIA'
      },
      {
        id: 4,
        name: 'TERROR'
      },
      {
        id: 5,
        name: 'ROMANCE'
      },
      {
        id: 6,
        name: 'MISTERIO'
      },
    ]
  },
  getters: {},
  mutations: {
    login(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('categories', JSON.stringify(state.categories))
      state.isLogued = true
    },
    logout(state) {
      state.user = {
        email: '',
        password: '',
        apiKey: '',
        utcTimeStamp: '',
        signature: '',
      }
      localStorage.removeItem('user')
      localStorage.removeItem('categories')
      state.isLogued = false
    },
    initializeStore (state) {
      const user = JSON.parse(localStorage.getItem('user'))
      const categories = JSON.parse(localStorage.getItem('categories'))
      if (user) {
        state.user = user
        state.isLogued = true
        state.categories = categories
      } else {
        state.isLogued = false
      }
    },
    createCategory(state, category) {
      state.categories.push(category)
      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    updateCategory (state, payload) {
      const index = state.categories.findIndex(c => c.id === payload.id)
      state.categories[index] = payload
      localStorage.setItem('categories', JSON.stringify(state.categories))
    }
  },
  actions: {
    createCategory({ commit }, payload ) {
      commit('createCategory', payload)
    },
    updateCategory({ commit }, payload) {
      commit('updateCategory', payload)
    }

  }
})

export default store