import toast from 'react-hot-toast'

type IToastSuccess = {
  message: string
}

export const ToastSuccess = ({ message }: IToastSuccess) => {
  return toast.success(message)
}
