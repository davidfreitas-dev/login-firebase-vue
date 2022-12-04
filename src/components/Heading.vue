<script setup>
const props = defineProps(['size', 'text'])
</script>

<template>
  <span
    :class="{
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    }"
    class="text-gray-100 font-bold font-sans"
  >
    {{ text }}
  </span>
</template>