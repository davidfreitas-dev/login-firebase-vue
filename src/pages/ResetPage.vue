<script setup>
import { ref, reactive } from 'vue';
import Heading from '../components/Heading.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import Logo from '../components/Logo.vue';

const loginData = reactive({
  password: '',
  newPassword: ''
})

const isLoading = ref(false)

const validateForm = (event) => {
  event.preventDefault();

  isLoading.value = true
  
  setTimeout(() => {
    console.log('LoginData: ', loginData)

    isLoading.value = false
  }, 3000);
}
</script>

<template>
  <div class="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
    <header class="flex flex-col items-center">
      <Logo />

      <Heading
        :size="'lg'"
        :text="'Auth System'"
        class="mt-4"
      />

      <Text 
        :size="'lg'"
        :text="'Cadastre sua nova senha!'"
        class="text-gray-400 mt-1"
      />
    </header>

    <form @submit="validateForm" class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <div class="flex flex-col gap-3">
       <label class="font-semibold" for="lblPassword">
          Senha antiga
        </label>

        <TextInput
          v-model="loginData.password"
          :type="'password'"
          :icon="'LockClosedIcon'"
          :text="'**********'"
        />
      </div>

      <div class="flex flex-col gap-3">
       <label class="font-semibold" for="lblNewPassword">
          Nova senha
        </label>

        <TextInput
          v-model="loginData.newPassword"
          :type="'password'"
          :icon="'LockClosedIcon'"
          :text="'**********'"
        />
      </div>

      <Button
        :text="'Cadastrar nova senha'"
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
  </div>
</template>