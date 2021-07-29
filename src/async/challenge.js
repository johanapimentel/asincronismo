const fetchData = require('../utils/fechtData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api, num) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[num].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(`count ${data.info.count}`);
        console.log(`character ${character.name}`);
        console.log(`origin ${origin.dimension}`);
    } catch (error) {
        console.error(error);
    }
};

console.log(`before `);
anotherFunction(API, 3);
console.log(`after `);
