function addNumbers(a,b,c,d){

       return this.niga + " just caluclated " + (a+b+c+d);
}

var Niga = {
     niga : "NigaHiga"
}

ca = addNumbers.bind(Niga)

ca(9,9,9,9)