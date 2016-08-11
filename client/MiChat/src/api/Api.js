import apisauce from 'apisauce'

const create = (baseURL = 'http://10.0.1.99:3000') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000
    });

    const logIn = (username, password) => api.post('/login', {userName: username, password: password})
    return {
        logIn,
    }
};

export default {
    create
}