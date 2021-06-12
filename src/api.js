// import axios from "axios";
import questions from "./mocks/questions"


// const instance = axios.create({
//     baseURL: "https://htmlacademy-react-2.appspot.com/guess-melody",
//     timeout: 5000,
//     withCredentials: true,
// });

// export const serverAPI = {
//     getQuestions: () => instance.get('/questions'),
//     authorising: ({email, password}) => instance.post('/login', {email, password}),
// };


export const serverAPI = {
    getQuestions: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: questions
            })
            // reject('server dont answer...')
        }, 2000)
    }),
    authorising: ({email, password}) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    id: 1,
                    email: 'alkirichenko81@gmail.com',
                    name: 'alkir',
                }
            })
            // reject('Incorrect email or password!!!')
        }, 2000)
    }),
};
