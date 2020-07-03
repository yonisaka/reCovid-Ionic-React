import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,} from '@ionic/react';
import './Tab2.css';
import CovidService from '../services/CovidService';
import IndoCovidService from '../services/IndoCovidService';
import {Line, Bar} from 'react-chartjs-2';

const Tab2: React.FC = () => {
  const [chartData, setChartData] = React.useState({});
  const [chartHarian, setChartHarian] = React.useState({});
  const [chartProvinsi, setChartProvinsi] = React.useState({});
  // const [data, setData] = React.useState([]);

  const chart = () => {
  let dataDate:any = [];
  let dataConf:any = [];
  let hariKe:any = [];
  let kasus:any = [];
  let namaProv:any = [];
  let provPositif:any = [];

  const daily = new CovidService()
  daily.getDataDaily().then(result =>{
  	// console.log(result.data)
	for(const dataObj of result.data){
		dataDate.push(dataObj.reportDate)
		dataConf.push(parseInt(dataObj.totalConfirmed))
		setChartData({
	      labels: dataDate,
	      datasets: [{
	        label: 'Total Confirmed',
	        data: dataConf,
	        backgroundColor: [ 
	          'rgba(75, 192, 192, 0.6)'
	        ],
	        borderWidth: 4
	      }]
	    })
	}
  });

  const harian = new IndoCovidService()
  harian.getDataHarian().then(result=> {
  	for(const dataObj of result.data.data){
  		hariKe.push(parseInt(dataObj.harike))
  		kasus.push(parseInt(dataObj.jumlahKasusKumulatif))

  		setChartHarian({
	      labels: hariKe,
	      datasets: [{
	        label: 'Total Kasus',
	        data: kasus,
	        backgroundColor: [ 
	          'rgba(251, 92, 44, 0.6)'
	        ],
	        borderWidth: 4
	      }]
	    })
  	}
  });

  const provinsi = new IndoCovidService()
  provinsi.getDataProvinsi().then(result=> {
  	for(const dataObj of result.data.data){
  		namaProv.push(dataObj.provinsi)
  		provPositif.push(parseInt(dataObj.kasusPosi))

  		setChartProvinsi({
	      labels: namaProv,
	      datasets: [{
	        label: 'Total Kasus per Provinsi',
	        data: provPositif,
	        backgroundColor: [ 
	          'rgba(251, 196, 44, 0.6)'
	        ],
	        borderWidth: 4
	      }]
	    })
  	}
  });
    
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Data Chart Covid-19</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
       <IonCard>
         <IonCardHeader>
           <IonCardSubtitle>Data Perkembangan</IonCardSubtitle>
           <IonCardTitle>Global - Covid 19</IonCardTitle>
         </IonCardHeader>
         <IonCardContent>
           <Line data={chartData} />
         </IonCardContent>
       </IonCard>

       <IonCard>
         <IonCardHeader>
           <IonCardSubtitle>Data Perkembangan</IonCardSubtitle>
           <IonCardTitle>Indonesia - Covid 19</IonCardTitle>
         </IonCardHeader>
         <IonCardContent>
           <Line data={chartHarian} />
         </IonCardContent>
       </IonCard>

       <IonCard>
         <IonCardHeader>
           <IonCardSubtitle>Kasus Positif</IonCardSubtitle>
           <IonCardTitle>Indonesia Provinsi- Covid 19</IonCardTitle>
         </IonCardHeader>
         <IonCardContent>
           <Bar data={chartProvinsi} />
         </IonCardContent>
       </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
