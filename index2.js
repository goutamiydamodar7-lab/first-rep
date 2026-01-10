const getFees = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({tution: 5000, bus: 2000});
        }, 10000);
    })
};

const showFees = async () => {
    console.log("Fetching fees..");
    const fees = await getFees();
    console.log("Fees received:", fees);
};
showFees();
console.log("java pgm");