function Constructor (brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
    this[Symbol.toPrimitive] = function(func){
        switch(func){
            case 'string':
                return `${this.brand}`
            case 'number':
                return this.cost
            case 'default':
                return `/ ${this.brand} ${this.system} ${this.cost} /`
        }
    }
}

const dell = new Constructor('Dell', 'windows', 800);
const apple = new Constructor('Apple', 'MAC OS', 1700);
let group = {};
group[dell] = dell + apple;
console.log(group);