import axios from 'axios'
import { useSessionStore } from '@/stores/session'

axios.interceptors.request.use(function (config) {
  const storeSession = useSessionStore()
  config.headers.common['X-Token'] = storeSession.session.token  
  return config;
});