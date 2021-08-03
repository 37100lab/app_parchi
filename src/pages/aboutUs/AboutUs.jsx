import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react'
  import React from 'react'
  
  const AboutUs = (props) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>37100 LAB</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <h1>APP sviluppata da 37100 LAB</h1>
          <p>logo di 37100</p>
          <p>www 37100lab comune verona it</p>
          <p>seguici sui social facebook instagram linkedin youtube</p>
        </IonContent>
      </IonPage>
    )
  }
  
  export default AboutUs
  