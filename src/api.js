import axios from "axios";


const instance = axios.create({
    baseURL: "https://htmlacademy-react-2.appspot.com/guess-melody",
    timeout: 5000,
    withCredentials: true,
});

export default instance;
