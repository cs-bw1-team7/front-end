// DO NOT CHANGE CODE IN THIS FILE
import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://partyplanner-b.herokuapp.com/api',
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
};