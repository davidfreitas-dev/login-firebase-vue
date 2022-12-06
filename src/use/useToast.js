import { ref } from 'vue'

export function useToast() {
  const toast = ref(null)

  const toastData = ref({
    message: '',
    type: 'error'
  })

  const handleToast = (type, message) => {
    toastData.value.type = type
    toastData.value.message = message
    toast.value?.showToast()
  }

  return {
    toast,
    toastData,
    handleToast
  }
}