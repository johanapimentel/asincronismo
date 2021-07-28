let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

// challenge request

const fechtData = (url_api, callback) =>{
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
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

fechtData(API, (error1, data1) => {
    if (error1) return console.error(error1);
    //for (item of data1.results) {
        // console.log(`nombre: ${item.name} url: ${API + item.id} imagen" ${item.image}`);
        fechtData(API + data1.results[0].id, (error2, data2) => {
            if (error2) return console.error(error2);
            // console.log(`${data2.id} ${data2.name} nomb ${data2.origin.name} origen: ${data2.origin.url}`);
            fechtData(data2.origin.url, (error3, data3) => {
                if (error3) return console.error(error3);
                //console.log(`${data1.count} ${data2.id} ${data3.id}`);
                console.log(`ID2: ${data2.id}
                            Nombre2: ${data2.name}
                            Estado2: ${data2.status}
                            Localizacion3: ${data3.name} 
                            Dimension3: ${data3.dimension}
                            Tipo3: ${data3.type}`);
            });
        });
    //};
});