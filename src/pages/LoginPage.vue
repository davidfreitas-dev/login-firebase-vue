<script setup>
import { ref, reactive } from 'vue';
import Heading from '../components/Heading.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import Checkbox from '../components/Checkbox.vue';
import TextInput from '../components/TextInput.vue';
import Logo from '../components/Logo.vue';

const loginData = reactive({
  email: '',
  password: ''
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
        :text="'Faça login e comece a usar!'"
        class="text-gray-400 mt-1"
      />
    </header>

    <form @submit="validateForm" class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblEmail">
          Endereço de e-mail
        </label>

        <TextInput
          v-model="loginData.email"
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
          v-model="loginData.password"
          :type="'password'"
          :icon="'LockClosedIcon'"
          :text="'**********'"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox :text="'Checkbox'" />

        <label for="lblCheckbox" class="text-gray-400 text-sm">
          Lembrar de mim por 30 dias
        </label>
      </div>

      <Button
        :text="'Entrar na plataforma'"
        :isLoading="isLoading"
        class="mt-4"
      />
    </form>

    <footer class="flex flex-col items-center gap-4 mt-8">
      <router-link to="/forgot">
        <Text
          :size="'sm'"
          :text="'Esqueceu sua senha?'"
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