let seleries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
};
function dayPay(){
    alert('We must pay salary on Tuesday!')
};

function total(){
    const values = Object.values(seleries);
    let sum = values.reduce((pSum, a) => pSum + a, 0);
    console.log(sum);
};

dayPay();
total();

seleries.manager = 5000;

total();