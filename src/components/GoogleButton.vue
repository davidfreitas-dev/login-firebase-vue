<script setup>
import { useRouter } from 'vue-router';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const router = useRouter()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()    

  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-500"></div>
    <span class="flex-shrink mx-4 text-gray-400">ou</span>
    <div class="flex-grow border-t border-gray-500"></div>
  </div>

  <button @click="signInWithGoogle" type="button" class="flex flex-row justify-center items-center gap-2 cursor-pointer py-3 px-4 bg-white rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white">
    <img src="../assets/google.svg" alt="Logo Google" class="w-5 h-5" />
    Entrar com Google
  </button>
</template>