import axios from "axios";

const baseUrl = '/users';
export const addUser = user => {
    /*return new Promise((resolve, reject) => {
        //if (user.id)
            resolve(user);
        //reject("Oooops");
    });*/
    return axios.post(baseUrl, user);
};

export const updateUser = user => axios.put(baseUrl, user);

export const getUsers = () => {
    /*return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                id: 1,
                username: "First",
                email: "test@test.com",
                phone: '1244545'
            }, {
                id: 2,
                username: "First",
                email: "test@test.com",
                phone: '1244545'
            }, {
                id: 3,
                username: "First",
                email: "test@test.com",
                phone: '1244545'
            }, {
                id: 4,
                username: "First",
                email: "test@test.com",
                phone: '1244545'
            }]);
        }, 1000);
        if (1 < 0)
            reject("OOOPS");
    });*/
    return axios.get(baseUrl);
};

export const deleteUser = (id) => axios.delete(baseUrl + '/' + id);
