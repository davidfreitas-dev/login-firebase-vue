<script setup>
import { computed, defineEmits } from 'vue';

const props = defineProps(['value', 'modelValue'])

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    v-model="model"
    :value="value"
    class="w-4 h-4 p-[2px] bg-gray-800 accent-brand rounded"
    type="checkbox"
  >
</template>