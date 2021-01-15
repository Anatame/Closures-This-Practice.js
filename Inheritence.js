function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function(){
    return "VROOOM!!"
}

Vehicle.prototype.tostring = function(){
    return "The bla bla propteries are = " + this.make +" "+ this.model+ " " + this.year
}

function Car(make, model, year){
    Vehicle.apply(this, arguments)

    this.numOfWheels = 4
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car