import { IonToast } from '@ionic/react'
import React, { useState } from 'react'

const Toast = ({ message, color }) => {
  const [showToast, setShowToast] = useState(true)

  return (
    <IonToast
      isOpen={showToast}
      duration={3000}
      onDidDismiss={() => setShowToast(false)}
      message={message}
      color={color}
      position="top"
    />
  )
}

export default Toast
