
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Lo hicimos!! ');
        } else {
            reject('Ohhh! Fallo ');
        };
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whopps! ');
            reject(error);
        };
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Hola! '))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log(response);
    })
    .then(() => {
        console.log('Hola! Promesas');
    })
    .catch(err => {
        console.error(err);
    });