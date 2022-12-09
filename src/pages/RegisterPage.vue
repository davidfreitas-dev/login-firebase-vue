<script setup>
import { ref, reactive } from 'vue';
import { useToast } from '../use/useToast';
import { useException } from '../use/useException';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Heading from '../components/Heading.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import Logo from '../components/Logo.vue';
import Toast from '../components/Toast.vue';
import GoogleButton from '../components/GoogleButton.vue';

const router = useRouter()

const userData = reactive({
  name: '',
  email: '',
  password: ''
})

const isLoading = ref(false)

const register = () => {
  isLoading.value = true

  const auth = getAuth()

  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((res) => {
      console.log('Registrado com sucesso!', auth.currentUser)
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      handleException(err.code)
      handleToast('error', exception)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const validateForm = (event) => {
  event.preventDefault()

  register()
}

const { handleException, exception } = useException()
const { toast, toastData, handleToast } = useToast()
</script>

<template>
  <div class="w-screen md:h-screen p-7 flex flex-col items-center justify-center text-gray-100">
    <header class="flex flex-col items-center">
      <Logo />

      <Heading
        :size="'lg'"
        :text="'Auth System'"
        class="mt-4"
      />

      <Text 
        :size="'lg'"
        :text="'Cadastre-se e comece a usar!'"
        class="text-gray-400 mt-1"
      />
    </header>

    <form @submit="validateForm" class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblNome">
          Nome e sobrenome
        </label>

        <TextInput
          v-model="userData.name"
          :type="'text'"
          :icon="'UserIcon'"
          :text="'John Doe'"
        />
      </div>

      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblEmail">
          Endereço de e-mail
        </label>

        <TextInput
          v-model="userData.email"
          :type="'email'"
          :icon="'EnvelopeIcon'"
          :text="'johndoe@email.com'"
        />
      </div>

      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblPassword">
          Sua senha
        </label>

        <TextInput
          v-model="userData.password"
          :type="'password'"
          :icon="'LockClosedIcon'"
          :text="'**********'"
        />
      </div>

      <Button
        :text="'Cadastrar na plataforma'"
        :isLoading="isLoading"
        class="mt-4"
      />

      <GoogleButton />
    </form>

    <footer class="flex flex-col items-center gap-4 mt-8">
      <router-link to="/forgot">
        <Text
          :size="'sm'"
          :text="'Esqueceu sua senha?'"
          class="text-gray-400 cursor-pointer hover:text-gray-200"
        />
      </router-link>

      <router-link to="/login">
        <Text
          :size="'sm'"
          :text="'já possui conta? Entre agora!'"
          class="text-gray-400 cursor-pointer hover:text-gray-200"
        />
      </router-link>
    </footer>

    <Toast ref="toast" :toastData="toastData"/>
  </div>
</template>