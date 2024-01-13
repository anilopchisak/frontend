import axios from "axios";

// instance for requests without auth
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export{
    $host,
}