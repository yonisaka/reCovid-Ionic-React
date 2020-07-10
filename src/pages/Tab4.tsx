import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonRow, IonCol } from '@ionic/react';
import './Tab3.css';


const Tab4: React.FC = () => {
  const [provinsi, setProvinsi] = React.useState(String);
  const [positif, setPositif] = React.useState(String);
  const [sembuh, setSembuh] = React.useState(String);
  const [meninggal, setMeninggal] = React.useState(String);

  React.useEffect(() => {
    let response = localStorage.getItem("province")!;
    let result = JSON.parse(response);
    setProvinsi(result.provinsi)
    setPositif(result.kasusPosi)
    setSembuh(result.kasusSemb)
    setMeninggal(result.kasusMeni)
  })
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Saved Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-padding-bottom">{provinsi}</IonCardTitle>  
                <IonCardSubtitle>Positif : {positif} </IonCardSubtitle>
                <IonCardSubtitle>Sembuh : {sembuh} </IonCardSubtitle>
                <IonCardSubtitle>Meninggal : {meninggal} </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
