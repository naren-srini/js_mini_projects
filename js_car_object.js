// In this program, we are using js objects to emulate a car with its methods
// Using functions on existing objects we also manipulate the object information

const car = {};
car.make = 'Ford';
car.model = 'F-150';
car.type = 'Truck';
car.color = 'Blue';
car.version = 'Lariat';
car.year = 2021;
car.value = 55000;
car.engine = '2.7L EcoBoost V6';
car.power = 325;
car.package = ["Class IV Trailer Hitch", "Ford Co-Pilot360 2.0", "Trailer Tow Package"];
car.mileage = 0;
car.driving = function(num) {
    this.mileage += num;
    console.log('driving having fun');
};
car.stats = function() {
    car.value -= this.mileage;
    return `${this.make} ${this.model} ${this.version} ${this.type} ${this.year}`;
};

car.driving(1000);
console.log(car.stats);
let curStat = car.stats();
car.driving(1000);
car.driving(5000);
car.driving(5000);
car.driving(1000);
console.log(curStat);
console.log(car.stats());