import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID T7KVlIikCxRn1Wdr2xOTRnm8r-OucgZbePDt0XkRk2M",
    }
});