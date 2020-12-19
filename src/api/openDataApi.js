/**
 * OpenData API Gent
 * more info visit: https://data.stad.gent/api/v1/console/datasets/1.0/search/
 */

const URL = 'https://private-portal.opendatasoft.com/api/v2/catalog/datasets/?apikey=7511e8cc6d6dbe65f9bc8dae19e08c08a2cab96ef45a86112d303eee HTTP/1.1'; // 'https://data.stad.gent/api/datasets/1.0/search/?q=0';
const API_KEY = '6e1998bc89838826f89a75a33e030fcab5ccc294add0e9be3109e77a';


// https://private-portal.opendatasoft.com/api/v2/catalog/datasets/?apikey=6e1998bc89838826f89a75a33e030fcab5ccc294add0e9be3109e77a HTTP/1.1

const FetchApiGent = {
    async fetch() {
        try {
            const response = await fetch('https://data.stad.gent/api/datasets/1.0/search/?q=0');
            if (!response.ok) throw new Error('Error in api server. Check your internet connnection');
            const jsonData = await response.json();
            console.log(jsonData);
            return jsonData;
        } catch (err) {
            console.error(err.message);
        }
        return false;
    },
};
export default FetchApiGent;