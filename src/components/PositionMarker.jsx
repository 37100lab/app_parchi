import React, { useEffect } from 'react'
import { IonText } from '@ionic/react'
import { Marker, Popup, useMap } from 'react-leaflet'

const PositionMarker = ({ coords }) => {
  const map = useMap()

  useEffect(() => {
    map.flyTo(coords)
  }, [map, coords])

  return (
    <Marker position={coords}>
      <Popup>
        <IonText>You are here</IonText>
      </Popup>
    </Marker>
  )
}

export default PositionMarker
