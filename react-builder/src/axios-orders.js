import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-builder-1-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;