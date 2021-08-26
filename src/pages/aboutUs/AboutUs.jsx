import {
  IonContent,
  IonPage,
  IonItem,
  IonImg,
  IonIcon,
  IonLabel,
  IonButton,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react'
import React from 'react'

import abb from '../../assets/img/abb.jpeg'
import smartphone from '../../assets/img/smartphone.png'
import {
  logoInstagram,
  logoFacebook,
  earthOutline,
  logoLinkedin,
  logoYoutube,
} from 'ionicons/icons'

const AboutUs = props => {
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Parchi a Verona</IonTitle>
      </IonToolbar>

      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              <IonImg src={abb} style={{ maxWidth: '400px', margin: 'auto' }} />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonImg
                src={smartphone}
                style={{ maxWidth: '150px', margin: 'auto' }}
              />
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-margin-top">
            <IonCol size="3">
              <IonButton
                href="https://www.facebook.com/37100Lab.ComuneVerona"
                color="dark"
                shape="round"
                fill="outline"
                class="ion-justify-content-center"
              >
                <IonIcon size="large" icon={logoFacebook} />
                <IonLabel></IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton
                tab="insta"
                href="https://www.instagram.com/37100lab.comunediverona/"
                color="dark"
                shape="round"
                fill="outline"
                class="ion-justify-content-center"
              >
                <IonIcon size="large" icon={logoInstagram} />
                <IonLabel></IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton
                tab="linkedin"
                href="https://www.linkedin.com/company/37100lab-comune-di-verona/"
                color="dark"
                shape="round"
                fill="outline"
                class="ion-justify-content-center"
              >
                <IonIcon size="large" icon={logoLinkedin} />
                <IonLabel></IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton
                tab="youtube"
                href="https://www.youtube.com/channel/UCuUl-_yGTbId8juRTmhZ9EA"
                color="dark"
                shape="round"
                fill="outline"
                class="ion-justify-content-center"
              >
                <IonIcon size="large" icon={logoYoutube} />
                <IonLabel></IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard color="light">
          <IonItem>
            <IonIcon icon={earthOutline} slot="start" />
            <IonLabel color="dark" className="ion-text-wrap">
              PROSSIMI EVENTI 37100 COMUNE DI VERONA
            </IonLabel>
            <IonButton
              href="https://37100lab.comune.verona.it/eventi/"
              fill="outline"
              slot="end"
            >
              Link
            </IonButton>
          </IonItem>

          <IonItem>
            <IonLabel color="dark" className="ion-text-wrap">
              CHI SIAMO
            </IonLabel>
          </IonItem>

          <IonCardContent>
            Gli Innovation Lab sono dei veri e propri luoghi fisici che ospitano
            attività di co-progettazione e collaborazione tra soggetti pubblici
            e privati, corsi di formazione per accrescere la cultura digitale,
            biblioteca e postazioni di co-working con accesso Wi-Fi, servizi di
            digital empowerment per le imprese, sportello per le politiche
            attive del lavoro, laboratori digitali, showroom dell’innovazione,
            servizi alle imprese e al territorio e alle start-up innovative.
            L'idea principale nasce dall'esperienza e dalla capitalizzazione di
            precedenti azioni basate sul modello di Open Innovation.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default AboutUs
