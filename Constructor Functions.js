function Person(firstName, lastName, favouriteColor, favouriteNumber){
      
      this.firsName = firstName;
      this.lastName = lastName;
      this.favouriteColor = favouriteColor;
      this.favouriteNumber = favouriteNumber;
      this.multiplyFavouriteNumber = function(num){
          return num * favouriteNumber;
      }

}

function Parent(firstName, lastName, favouriteColor, favouriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favouriteColor = favouriteColor;
    this.favouriteFood = favouriteFood;
}

function Child(firstName, lastName, favouriteColor, favouriteFood){
    Parent.apply(this, arguments)
}

