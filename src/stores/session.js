import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
  state: () => {
    return { session: {} }
  },
  actions: {
    setSession(session) {
      this.session = session

      sessionStorage.setItem('session', JSON.stringify(this.session));
    },
    destroySession() {
      sessionStorage.removeItem('session');
      
      this.session = {}
    },
  },
})