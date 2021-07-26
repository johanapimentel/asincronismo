let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API_URL = 'https://api.genderize.io/?name=';

const fechtData = (url_api, callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    };
    xhttp.send();
}

const name = 'doris';

fechtData(API_URL + name, (error, data) => {
    if (error) return console.log(error);
    console.log(`Nombre: ${data.name}`);
    console.log(`Genero: ${data.gender}`);
    console.log(`Probabilidad: ${data.probability}`);
    console.log(`Cantidad: ${data.count}`);
});