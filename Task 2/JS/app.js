let seleries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay(){
        alert('We must pay salary on Tuesday!')
    },

    total(){
        const values = Object.values(this).filter(item => typeof item === "number");
        let sum = values.reduce((pSum, a) => pSum + a, 0);
        console.log(sum);
    },
};


seleries.dayPay();
seleries.total();

seleries.manager = 5000;

seleries.total();