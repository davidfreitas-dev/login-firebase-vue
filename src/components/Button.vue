<script setup>
const props = defineProps(['text'])
</script>

<template>
  <button class="py-3 px-4 bg-brand rounded font-semibold text-black text-sm w-full transition-colors hover:bg-brand-hover focus:ring-2 ring-white">
    {{ text }}
  </button>
</template>