import axios from 'axios';
export default {
    obtenerMoneda: function (tipomoneda) {
        return axios({
            method: 'get',
            url: 'https://api.coinstats.app/public/v1/coins/' + tipomoneda,
            data: {} 
        });
    },
    obtenerTodasMonedas: function() {
        return axios({
            method: 'get',
            url: 'https://api.coinstats.app/public/v1/coins',
            data: {}
        })
    }
}