import { useState } from 'react'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState([])

  const takePhoto = async () => {
    try {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      })
      const fileName = new Date().getTime() + '.jpeg'
      const newPhotos = [
        {
          filepath: fileName,
          webviewPath: cameraPhoto.webPath,
        },
        ...photos,
      ]
      setPhotos(newPhotos)
    } catch (err) {
      console.error(err)
    }
  }

  const removePhoto = () => {
    setPhotos([])
  }

  return {
    photos,
    takePhoto,
    removePhoto,
  }
}
