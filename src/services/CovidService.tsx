import axios from 'axios';

class CovidService {
    url = 'https://covid19.mathdro.id/api';

    getDataGlobal(){
        return axios.get(`${this.url}`);
    }

    getDataIndonesia(){
        return axios.get(`${this.url}/countries/ID`);
    }
    getDataConfirmed(){
        return axios.get(`${this.url}/confirmed`);
    }

    getDataDaily(){
        return axios.get(`${this.url}/daily`);
    }

}

export default CovidService