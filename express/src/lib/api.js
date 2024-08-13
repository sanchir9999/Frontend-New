import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001/', // Таны API-ийн үндсэн URL
    timeout: 1000, // Хүсэлтийн хүлээх хугацааг тохируулах

});
