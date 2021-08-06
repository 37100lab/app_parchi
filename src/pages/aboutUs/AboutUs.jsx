import {
    IonContent,
    IonPage,
    IonItem,
    IonImg,
    IonIcon,
    IonLabel,
    IonButton,
    IonFooter,
    IonToolbar,
    IonCardContent,
    IonCard,
  } from '@ionic/react'
  import React from 'react'
 
  import abb from '../../assets/img/abb.jpeg'
  import smartphone from '../../assets/img/smartphone.png'
  import { logoInstagram,logoFacebook,earthOutline,logoLinkedin,logoYoutube,
    } from 'ionicons/icons'

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
      
            <IonToolbar  color="success">
            
              <div  style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
        <IonButton href="https://www.facebook.com/37100Lab.ComuneVerona" color="dark" shape="round" fill="outline" class="ion-justify-content-center">
              <IonIcon size="large" icon={ logoFacebook} />
              <IonLabel ></IonLabel>
            </IonButton>
            </div>

            <div  style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
            <IonButton tab="insta" href="https://www.instagram.com/37100lab.comunediverona/" color="dark" shape="round" fill="outline" class="ion-justify-content-center">
              <IonIcon size="large" icon={logoInstagram} />
              <IonLabel></IonLabel>
            </IonButton>
            </div>

            <div  style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                  <IonButton tab="linkedin" href="https://www.linkedin.com/company/37100lab-comune-di-verona/" color="dark" shape="round" fill="outline" class="ion-justify-content-center">
              <IonIcon size="large" icon={logoLinkedin} />
              <IonLabel></IonLabel>
            </IonButton>
            </div>
              
            <div  style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                  <IonButton tab="youtube" href="https://www.youtube.com/channel/UCuUl-_yGTbId8juRTmhZ9EA" color="dark" shape="round" fill="outline" class="ion-justify-content-center">
              <IonIcon size="large" icon={logoYoutube} />
              <IonLabel></IonLabel>
            </IonButton>
            </div>
          
            </IonToolbar>
           
        
            <IonCard color="light">
          <IonItem>
            <IonIcon icon={earthOutline} slot="start" />
            <IonLabel color="dark">PROSSIMI EVENTI 37100 COMUNE DI VERONA</IonLabel>
            <IonButton href="https://37100lab.comune.verona.it/eventi/" fill="outline" slot="end">View</IonButton>
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
  
