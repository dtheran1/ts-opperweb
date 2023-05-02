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
    ],
    search: ''
  },
  getters: {
    filteredCategories (state) {
      let categories = state.categories
      if(typeof state.search === 'string' && state.search.length > 0) {
        return categories.filter(item => item.name.toLowerCase().includes(state.search))
      }
      return categories
    }
  },
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
      state.categories = [
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
    },
    setSearch(state, payload) {
      state.search = payload
    },
  },
  actions: {
    createCategory({ commit }, payload ) {
      commit('createCategory', payload)
    },
    updateCategory({ commit }, payload) {
      commit('updateCategory', payload)
    },
    setSearch({ commit }, payload) {
      commit('setSearch', payload)
    }
  }
})

export default store