<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';
import Heading from '../components/Heading.vue';

const router = useRouter()

const isLoggedIn = ref(false)

const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/login')
  })
}
</script>

<template>
  <div class="flex flex-col items-center h-screen bg-gray-900">
    <Heading
      :size="'lg'"
      :text="'Seja Bem-vindo!'"
      class="my-10"
    />

    <button
      @click="handleSignOut"
      class="py-3 px-4 bg-brand rounded font-semibold text-black text-sm w-36 transition-colors hover:bg-brand-hover focus:ring-2 ring-white"
    >
      Sair
    </button>
  </div>
</template>