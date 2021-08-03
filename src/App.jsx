import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  mapOutline,
  searchOutline,
} from 'ionicons/icons'

import Map from './pages/map/Map'
import AboutUs from './pages/aboutUs/AboutUs'
import { connect } from 'react-redux'

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

/* Theme variables */
import './theme/variables.css'

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/map" component={Map} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/" exact render={() => <Redirect to="/map" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="map" href="/map">
              <IonIcon icon={mapOutline} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>

            <IonTabButton tab="aboutus" href="/aboutus">
              <IonIcon icon={searchOutline} />
              <IonLabel>37100 LAB</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)
