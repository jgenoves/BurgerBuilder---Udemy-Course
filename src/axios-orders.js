import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-604c0.firebaseio.com/'
});

export default instance;