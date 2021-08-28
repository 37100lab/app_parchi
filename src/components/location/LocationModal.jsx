import React from 'react'

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonNote,
} from '@ionic/react'

import { medkitOutline, leafOutline } from 'ionicons/icons'
import stringManager from '../../utility/stringManager'

const categoryConfig = {
  parco: {
    icon: leafOutline,
    color: 'success',
  },
  farmacia: {
    icon: medkitOutline,
    color: 'danger',
  },
}

const LocationModal = ({ loc }) => {
  //if don't have loc.properties or its attributes throw internal error text,
  // just to easily customize the app farmacie in to other apps
  if (
    (loc.properties &&
      (!('denominazi' in loc.properties) ||
        !('nome_via' in loc.properties) ||
        !('circoscriz' in loc.properties) ||
        !('tipo_area' in loc.properties) ||
        !('sup_verde' in loc.properties))) ||
    !('sup_pavim' in loc.properties) ||
    !loc.properties
  )
    return (
      <IonContent>
        <h1>Internal Error</h1>
      </IonContent>
    )

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonItem>
            <IonTitle>
              {stringManager.titleCase(loc.properties.denominazi)}
            </IonTitle>
            <IonIcon
              color={categoryConfig['parco'].color}
              icon={categoryConfig['parco'].icon}
              slot="end"
            />
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <IonItem>
          <IonNote slot="start" color="primary">
            Indirizzo
          </IonNote>
          <IonLabel className="ion-text-wrap">
            {stringManager.titleCase(loc.properties.nome_via)}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Circosc.
          </IonNote>
          <IonLabel>
            {stringManager.titleCase(
              loc.properties.circoscriz.toString().substring(2)
            )}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Tipo Area
          </IonNote>
          <IonLabel>
            {stringManager.titleCase(loc.properties.tipo_area)}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Sup. Verde
          </IonNote>
          <IonLabel>{controlValue(loc.properties.sup_verde)}</IonLabel>
        </IonItem>
        <IonItem>
          <IonNote slot="start" color="primary">
            Sup. Pavim.
          </IonNote>
          <IonLabel>{controlValue(loc.properties.sup_pavim)}</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  )
}
function controlValue(val) {
  try {
    return stringManager.titleCase(val)
  } catch (exception) {
    return '0'
  }
}
export default LocationModal
