const fetchData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 10000);
    })
};
fetchData().then(data => console.log(data));
console.log("javascript program");