import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = ''

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPNHZLdKnnbYqwUUEpAOc1tFJZ34tPgQI",
  authDomain: "login-firebase-vue-d699d.firebaseapp.com",
  projectId: "login-firebase-vue-d699d",
  storageBucket: "login-firebase-vue-d699d.appspot.com",
  messagingSenderId: "130902503428",
  appId: "1:130902503428:web:7730b5cb4ba2254b9f8551"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import './style.css'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
