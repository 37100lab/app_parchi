import {
    IonContent,
    IonPage,
    IonItem,
    IonImg,
    IonIcon,
    IonLabel,
    IonButton,
    IonTabButton,
    IonFooter,
    IonToolbar,
    IonCardContent,
    IonCard,
  } from '@ionic/react'
  import React from 'react'
  import { images, logoInstagram, square, triangle } from 'ionicons/icons';
  import abb from '../../assets/img/abb.jpeg'
  import smartphone from '../../assets/img/smartphone.png'
  import { medkitOutline, leafOutline,  mapOutline,logoFacebook,atCircleOutline,earthOutline,
    searchOutline, } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import { IonReactRouter, } from '@ionic/react-router';

 
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

  const AboutUs = (props) => {
    return (
      
      <IonPage>
        
          <IonToolbar>
        <IonImg src={abb}
            style={{maxWidth: "400px" , margin: "auto"}}
            />

            <IonImg src={smartphone}
            style={{maxWidth: "150px" , margin: "auto"}}
            />
            </IonToolbar>
       <IonToolbar>
         
       </IonToolbar>
       
        <IonContent >
        
            <IonToolbar color="success">
           
            <IonTabButton tab="map" href="/map">
              <IonIcon size="large" icon={ logoFacebook} />
              <IonLabel>Facebook</IonLabel>
            </IonTabButton>

            <IonTabButton tab="aboutus" href="/aboutus">
              <IonIcon size="large" icon={logoInstagram} />
              <IonLabel>Instagram</IonLabel>
            </IonTabButton>
             
             <IonTabButton tab="aboutus" href="/aboutus">
              <IonIcon size="large" icon={atCircleOutline} />
              <IonLabel>ComuneVerona.it</IonLabel>
            </IonTabButton>
          
            </IonToolbar>
           
        
            <IonCard color="light">
          <IonItem>
            <IonIcon icon={earthOutline} slot="start" />
            <IonLabel color="dark">GEOAPP</IonLabel>
            <IonButton href="https://www.comune.verona.it" fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            Gli Innovation Lab sono dei veri e propri luoghi fisici che ospitano attività di co-progettazione e collaborazione tra soggetti pubblici e privati,
          corsi di formazione per accrescere la cultura digitale, biblioteca e postazioni di co-working con accesso Wi-Fi, servizi di digital empowerment per le imprese, sportello per le politiche attive del lavoro, laboratori digitali, showroom dell’innovazione, servizi alle imprese e al territorio e alle start-up innovative.
         L'idea principale nasce dall'esperienza e dalla capitalizzazione di precedenti azioni basate sul modello di Open Innovation. 
            
      </IonCardContent>
        </IonCard>
         
        </IonContent>

        <IonFooter>
        
        </IonFooter>

      </IonPage>
    )
  }
  
  export default AboutUs
  
