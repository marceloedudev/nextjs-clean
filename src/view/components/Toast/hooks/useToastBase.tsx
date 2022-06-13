import React from 'react'
import { Toaster } from 'react-hot-toast'

export const ToastBaseProvider: React.FC = () => {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 5000
        }}
      />
    </>
  )
}
