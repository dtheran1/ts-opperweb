import { createStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = createStore({
  modules: {
  },
  state: {
    userPerson: {
      name: '',
      lastName: '',
      phone: null,
      dni: null,
      email: '',
      password: '',
      confirmPassword: ''
    },
    userLegal: {
      companyName: '',
      nit: null,
      phone: null,
      email: '',
      password: '',
      confirmPassword: ''
    },
    user: {
      email: '',
      password: ''
    },
    isLogued: false
  },
  getters: {},
  mutations: {
    login(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
      // alert('Logged out')
      state.isLogued = true
      console.log('finish login');
    },
    logout(state) {
      state.user = {
        email: '',
        password: ''
      }
      localStorage.removeItem('user')
    },
    initializeStore (state) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        state.user = user
        state.isLogued = true
      } else {
        state.isLogued = false
      }
    }
  },
  actions: {
  }
})

export default store