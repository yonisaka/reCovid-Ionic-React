import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonIcon, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab1.css';
import CovidService from '../services/CovidService';
import { happy, sad, skull } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [confirmed, setConfirmed] = React.useState(String);
  const [recovered, setRecovered] = React.useState(String);
  const [death, setDeath] = React.useState(String);
  const [lastUpdate, setLastUpdate] = React.useState(String);
  const [globalImage, setGlobalImage] = React.useState('');

  React.useEffect(() =>{
    const covid = new CovidService()
    covid.getDataIndonesia().then(result => {
      setConfirmed(result.data.confirmed.value)
      setRecovered(result.data.recovered.value)
      setDeath(result.data.deaths.value)
      setLastUpdate(result.data.lastUpdate)
      setGlobalImage(`https://covid19.mathdro.id/api/og`)
      
    }, fail => {
      console.log(fail)
    })
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>ReCovid Apps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-text-center">
          <h3><b>Global Covid-19</b></h3>
        </div>
        <img className="ion-padding" alt="" src={globalImage}></img> 
        <div className="ion-text-center">
          <h3><b>Indonesia</b></h3>
        </div>
        <IonCard color="success">
            <IonCardHeader>
              <IonCardTitle>Recovered </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardTitle><IonIcon icon={happy}/> {recovered} </IonCardTitle>
            </IonCardContent>
        </IonCard>
        <IonCard color="tertiary">
            <IonCardHeader>
              <IonCardTitle>Confirmed </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardTitle><IonIcon icon={sad}/> {confirmed} </IonCardTitle>
            </IonCardContent>
        </IonCard>
        <IonCard color="danger">
            <IonCardHeader>
              <IonCardTitle>Death </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardTitle><IonIcon icon={skull}/> {death} </IonCardTitle>
            </IonCardContent>
        </IonCard>
        <h6 className="ion-text-end ion-padding"><i>Last Update :{ lastUpdate } </i></h6>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
