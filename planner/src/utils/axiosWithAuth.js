// DO NOT CHANGE CODE IN THIS FILE
import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://lambda-mud-cs28-teamnosleep.herokuapp.com/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
};