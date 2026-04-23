import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null
  }),

  getters: {
    isLoggedIn: (state) => !!state.user
  },

  actions: {
    login() {
      this.user = {
        id: 1,
        name: 'Demo User',
        email: 'demo@tidytidys.com'
      }
    },

    logout() {
      this.user = null
    }
  }
})