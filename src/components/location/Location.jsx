import React from 'react'

import { connect } from 'react-redux'
import { IonButton } from '@ionic/react'
import { showLocationModal } from '../../redux/actions'
import stringManager from '../../utility/stringManager'

export const Location = ({ location, showLocationModal }) => {
  return (
    <div>
      <h3>{stringManager.titleCase(location.properties.denominazi)}</h3>

      <IonButton
        expand="block"
        fill="clear"
        color="transparent"
        onClick={() => showLocationModal({ locationClicked: location })}
      >
        Info
      </IonButton>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = { showLocationModal }

export default connect(mapStateToProps, mapDispatchToProps)(Location)
