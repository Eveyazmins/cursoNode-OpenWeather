const axios = require('axios');

/* Creo la instancia de la petición que quiero hacer. Dentro de esta pongo la url de mi api + los headers
   Luego ejecuto la instancia creada con el método que quiero. En este caso GET.
   El await va a esperar a que responda el servidor a la petición realizada y una vez que responde lo va a
   guardar en la const resp. Y por ultimo retorno el response, lo cual va a ser capturado con .then o .catch
   en la llamada a la petición. 
*/
const getClima = async(dir) => {

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${dir}`,
        headers: { 'x-rapidapi-key': '2bc283d8e6msh02fd63e877a66d4p1bc8e8jsn71293bd2e0e7' }

    });
    const resp = await instance.get();

    return resp.data.main.temp;
}

module.exports = {
    getClima
}