var sayHi = function(){ 
    return "Hi " + this.firstPerson 
    }


var Colt = {
    firstPerson: "Colt",
    
}

var Ellie = {
    firstPerson : "Ellie"
}

sayHi.call(Colt)