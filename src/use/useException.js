import { ref } from 'vue'

export function useException() {
  const exception = ref('')

  const handleException = (errCode) => {
    switch (errCode) {
      case 'auth/invalid-email':
        exception.value = "E-mail inválido."
        break;

      case 'auth/email-already-in-use':
        exception.value = "Este e-mail já foi utilizado por outro usuário."
        break;

      case 'auth/user-not-found':
        exception.value = "Nenhuma conta encontrada para este e-mail."
        break;

      case 'auth/too-many-requests':
        exception.value = "Conta bloqueada por excesso de tentativas."
        break;

      case 'auth/wrong-password':
        exception.value = "Senha incorreta."
        break;

      case 'auth/weak-password':
        exception.value = "Sua senha deve possuir no mínimo 6 caracteres."
        break;

      case 'auth/invalid-email':
        exception.value = "E-mail inválido"
        break;

      case 'auth/user-disabled':
        exception.value = "Conta inativa."
        break;

      case 'auth/internal-error':
        exception.value = "Erro interno. Contate o administrador do sistema."
        break;
    
      default:
        exception.value = "E-mail ou senha incorreta."
        break;
    }
  }

  return {
    handleException,
    exception
  }
}