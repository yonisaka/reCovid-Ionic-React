import axios from 'axios';

class IndoCovidService {
    url = `https://indonesia-covid-19.mathdro.id/api`;

    getDataIndo(){
        return axios.get(`${this.url}`);
    }

    getDataProvinsi(){
        return axios.get(`${this.url}/provinsi`);
    }

    getDataHarian(){
    	return axios.get(`${this.url}/harian`);
    }
}

export default IndoCovidService