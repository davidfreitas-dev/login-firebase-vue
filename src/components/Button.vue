<script setup>
import Loader from '@/components/Loader.vue'

const props = defineProps(['text', 'isLoading'])
</script>

<template>
  <button
    type="submit"
    class="py-3 px-4 bg-brand rounded font-semibold text-black text-sm w-full transition-colors hover:bg-brand-hover focus:ring-2 ring-white"
  >
    <Loader v-if="isLoading" />
    <span v-else>{{ text }}</span>
  </button>
</template>