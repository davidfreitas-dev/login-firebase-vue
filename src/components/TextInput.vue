<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['icon', 'text'])
</script>

<template>
  <div class="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-brand-hover">
    <EnvelopeIcon
      v-if="(icon === 'EnvelopeIcon')"
      class="w-6 h-6 text-gray-400"
    />

    <LockClosedIcon
      v-if="(icon === 'LockClosedIcon')"
      class="w-6 h-6 text-gray-400"
    />

    <input 
      className="bg-transparent flex-1 text-gray-100 text-base placeholder:text-gray-400 outline-none"
      :placeholder="text"
    />
  </div>
</template>