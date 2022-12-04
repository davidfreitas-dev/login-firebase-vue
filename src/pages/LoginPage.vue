<script setup>
import Heading from '../components/Heading.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import Checkbox from '../components/Checkbox.vue';
import TextInput from '../components/TextInput.vue';
import Logo from '../components/Logo.vue';
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

    <form class="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <div class="flex flex-col gap-3">
        <label class="font-semibold" for="lblEmail">
          Endereço de e-mail
        </label>

        <TextInput
          :icon="'EnvelopeIcon'"
          :text="'user@domain.com'"
        />
      </div>

      <div class="flex flex-col gap-3">
       <label class="font-semibold" for="lblPassword">
          Sua senha
        </label>

        <TextInput
          :icon="'LockClosedIcon'"
          :text="'**********'"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox :text="'Checkbox'" />

        <label for="lblCheckbox" class="text-gray-200">
          Lembrar de mim por 30 dias
        </label>
      </div>

      <Button
        :text="'Entrar na plataforma'"
        class="mt-4"
      />
    </form>

    <footer class="flex flex-col items-center gap-4 mt-8">
      
    </footer>
  </div>
</template>