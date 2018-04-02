export const addUser = user => {
    return new Promise((resolve, reject) => {
        if (user.id > 0)
            resolve(user);
        reject("Oooops");
    });
};

export const getUsers = () => {
    return new Promise((resolve, reject) => {
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
    });
};