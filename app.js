const axios = require('axios');
const clima = require('./clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


/*Convierto la direccion en una direccion segura. Por ejemplo si tiene espacios lo convierte 
para poder ejecutar el api */

const encodedDir = encodeURI(argv.direccion);


/* Llamo al metodo getClima enviando como parametro la ciudad a consultar. Esto sería el Callback.
   getClima va a retornar una promesa. Esto va a ser capturado con .then o .catch */

clima.getClima(encodedDir)
    .then(resp => {
        console.log(`El clima de ${argv.direccion} es de ${resp} grados`)
            //console.log(resp);
    })
    .catch(err => {
        console.log(`No se pudo determinar el clima de ${encodedDir}`);
        //console.log(err);
    })