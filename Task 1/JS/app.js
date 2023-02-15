const car = {
    model: 'rs6',
    year: 2022,
    color: 'purple',
};

car.color = 'black';
car.type = 'electric';
car.signal = () => {
    alert('fa! fa!');
};

car.signal();