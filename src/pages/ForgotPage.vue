<script setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useException } from '../use/useException';
import { useToast } from '../use/useToast';
import Heading from '../components/Heading.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import Logo from '../components/Logo.vue';
import Toast from '../components/Toast.vue';

const userEmail = ref('')

const isLoading = ref(false)

const handleRecover = (userEmail) => {
  isLoading.value = true

  sendPasswordResetEmail(getAuth(), userEmail)
    .then((res) => {
      handleToast('success', 'Link de recuperação enviado!')
    })
    .catch((err) => {
      handleException(err.code)
      handleToast('error', exception)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const validateForm = (event) => {
  event.preventDefault();

  if (userEmail.value) {
    handleRecover()
  } else {
    handleToast('error', 'Informe seu e-mail.')
  }
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
        :text="'Recupere sua senha!'"
        class="text-gray-400 mt-1"
      />
    </header>

    <form @submit="validateForm" class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblEmail">
          Endereço de e-mail
        </label>

        <TextInput
          v-model="userEmail"
          :type="'email'"
          :icon="'EnvelopeIcon'"
          :text="'johndoe@email.com'"
          @onKeyupEnter="validateForm"
        />
      </div>

      <Button
        :text="'Enviar link de recuperação'"
        :isLoading="isLoading"
        class="mt-4"
      />
    </form>

    <footer class="flex flex-col items-center gap-4 mt-8">
      <router-link to="/login">
        <Text
          :size="'sm'"
          :text="'Voltar para a tela de login'"
          class="text-gray-400 cursor-pointer hover:text-gray-200"
        />
      </router-link>

      <router-link to="/register">
        <Text
          :size="'sm'"
          :text="'Não possui conta? Crie uma agora!'"
          class="text-gray-400 cursor-pointer hover:text-gray-200"
        />
      </router-link>
    </footer>

    <Toast ref="toast" :toastData="toastData"/>
  </div>
</template>