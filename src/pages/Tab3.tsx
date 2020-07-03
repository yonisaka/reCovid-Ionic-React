import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab3.css';
import IndoCovidService from '../services/IndoCovidService';

const Tab3: React.FC = () => {
  const [data, setData] = React.useState([]);
  const indo = new IndoCovidService()
  indo.getDataProvinsi().then(result=>{
    setData(result.data.data)
  },fail =>{
    console.log(fail)
  }) 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Indonesia Covid-19</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonGrid>
            {
              data.map((item, i) => {
                let provinsi = item['provinsi'];
                let positif = item['kasusPosi'];
                let sembuh = item['kasusSemb'];
                let meninggal = item['kasusMeni'];
                
                return(      
                  <IonCard key={i}>
                    <IonCardHeader>
                      <IonCardTitle className="ion-padding-bottom">{provinsi}</IonCardTitle>
                      <div className="ion-text-end">
                        <IonCardSubtitle>Positif : {positif} </IonCardSubtitle>
                        <IonCardSubtitle>Sembuh : {sembuh} </IonCardSubtitle>
                        <IonCardSubtitle>Meninggal : {meninggal} </IonCardSubtitle>
                      </div>
                    </IonCardHeader>
                  </IonCard>

                );
              })
            }
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
