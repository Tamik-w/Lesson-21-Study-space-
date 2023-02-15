function Constructor (brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
}

const dell = new Constructor('Dell', 'windows', '800');
const apple = new Constructor('Apple', 'MAC OS', '1700');
console.log(dell);
console.log(apple);