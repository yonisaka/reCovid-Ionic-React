import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonCardContent, IonToolbar, IonLabel, IonCol, IonGrid, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonButton, IonIcon, IonRow } from '@ionic/react';
import './Tab3.css';
import { add } from 'ionicons/icons';
import IndoCovidService from '../services/IndoCovidService';

const Tab3: React.FC = () => {
  const [data, setData] = React.useState([]);
  // const [searchText, setSearchText] = useState(String);
  // console.log(searchText);
  const indo = new IndoCovidService()
  indo.getDataProvinsi().then(result=>{
    setData(result.data.data)
  },fail =>{
    console.log(fail)
  }) 

  function setLocal(res: never){
    console.log(res)
    localStorage.setItem("province",JSON.stringify(res)) 
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Indonesia Covid-19</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}
        <IonGrid>
            {
              data.map((item, i) => {
                let res = item;
                let provinsi = item['provinsi'];
                let positif = item['kasusPosi'];
                let sembuh = item['kasusSemb'];
                let meninggal = item['kasusMeni'];
                
                return(      
                  <IonCard key={i}>
                    <IonCardHeader>
                      <IonCardTitle className="ion-padding-bottom">{provinsi}</IonCardTitle>
                      <IonRow>
                        <IonCol>
                        
                          <IonCardSubtitle>Positif : {positif} </IonCardSubtitle>
                          <IonCardSubtitle>Sembuh : {sembuh} </IonCardSubtitle>
                          <IonCardSubtitle>Meninggal : {meninggal} </IonCardSubtitle>
                        
                        </IonCol>
                        <IonCol>
                        <div className="ion-text-end">
                          <IonButton fill="outline" onClick={() => setLocal(res)}><IonIcon icon={add} /></IonButton>
                        </div>
                        </IonCol>
                      </IonRow>
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
