<script setup>
import { UserIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { LockClosedIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['type', 'icon', 'text', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'onKeyupEnter'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-brand-hover">
    <UserIcon
      v-if="(icon === 'UserIcon')"
      class="w-6 h-6 text-gray-400"
    />
    
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
      :type="type"
      :placeholder="text"
      :value="modelValue"
      @input="updateValue"
      @keyup.enter="$emit('onKeyupEnter')"
    />
  </div>
</template>