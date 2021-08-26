import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonFooter,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react'

import { MapContainer, TileLayer } from 'react-leaflet'

import { dismissLocationModal } from '../../redux/actions'
import classes from './Map.module.css'

import LocationMarkers from '../../components/location/LocationMarkers'
import LocationModal from '../../components/location/LocationModal'
import { setGps } from '../../redux/actions'

import { Geolocation } from '@capacitor/geolocation'

import sponsor from '../../assets/img/sponsor.jpg'
import { locateSharp } from 'ionicons/icons'
import { url } from '../../config/config'
import PositionMarker from '../../components/PositionMarker'
import Layers from '../../components/Layers'
import Toast from '../../components/Toast'

export class Map extends Component {
  state = {
    showMap: false,
    parchiPoligoni: {},
    quartieri: {},
    circoscrizioni: {},
    gpsError: '',
  }

  async componentDidMount() {
    this.GetParchiPoligoni()

    if (this.state.showMap) return
    setTimeout(() => {
      this.setState({ showMap: true })
    }, 500)
  }

  getCurrentPosition = async () => {
    try {
      this.setState({ gpsError: '' })
      const position = await Geolocation.getCurrentPosition()
      this.props.setGps([position.coords.latitude, position.coords.longitude])
    } catch (err) {
      this.setState({ gpsError: err.message })
    }
  }

  GetParchiPoligoni() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        var appoggio = 0
        for (let j = 0; j < data.features.length; j++) {
          for (
            let i = 0;
            i < data.features[j].geometry.coordinates[0][0].length;
            i++
          ) {
            appoggio = data.features[j].geometry.coordinates[0][0][i][1]
            data.features[j].geometry.coordinates[0][0][i][1] =
              data.features[j].geometry.coordinates[0][0][i][0]
            data.features[j].geometry.coordinates[0][0][i][0] = appoggio
          }
        }
        this.setState({ parchiPoligoni: data })
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  render() {
    const { center, zoom, position, locationClicked, showModal } =
      this.props.map

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Parchi a Verona</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent id="content" fullscreen>
          <IonModal isOpen={showModal} backdropDismiss={false}>
            {locationClicked && <LocationModal loc={locationClicked} />}
            <IonButton onClick={() => this.props.dismissLocationModal()}>
              Chiudi
            </IonButton>
          </IonModal>

          {this.state.showMap && (
            <MapContainer
              className={classes.mapContainer}
              center={center}
              zoom={zoom}
            >
              <Layers />

              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {position.length > 0 && <PositionMarker coords={position} />}
              <LocationMarkers myloc={this.state.parchiPoligoni.features} />
            </MapContainer>
          )}

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={this.getCurrentPosition}>
              <IonIcon icon={locateSharp} />
            </IonFabButton>
          </IonFab>
          {this.gpsError && <Toast message={this.gpsError} color="danger" />}
        </IonContent>

        <IonFooter>
          <IonImg src={sponsor} style={{ maxWidth: '500px', margin: 'auto' }} />
        </IonFooter>
      </IonPage>
    )
  }
}
const mapStateToProps = state => ({
  map: state.map,
})

const mapDispatchToProps = { setGps, dismissLocationModal }

export default connect(mapStateToProps, mapDispatchToProps)(Map)
