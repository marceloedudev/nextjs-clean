import toast from 'react-hot-toast'

type IToastError = {
  message: string
}

export const ToastError = ({ message }: IToastError) => {
  return toast.error(message)
}
