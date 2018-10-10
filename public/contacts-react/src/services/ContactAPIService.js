import axios from 'axios';

export const getContacts = () => {
    return new Promise(function (resolve, reject){
        let url = '/api/v1/contacts';

        axios.get(url).then(response => {
            resolve(response.data);
        })
        .catch(error => {
            console.error('error', error)
        });
    });
};