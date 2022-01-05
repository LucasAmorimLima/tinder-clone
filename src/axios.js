import axios from 'axios'

const instance =  axios.create({
    baseURL: 'https://tinder-nodejs-backend-bylucas.herokuapp.com/'
})

export default instance;