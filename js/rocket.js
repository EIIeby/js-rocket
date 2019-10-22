var carObject = {
  make: "Seat",
  type: "Leon",
  color: "Black",
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: ["Seat 1", "Seat 2", "Seat 3", "Seat 4"],

  turnOn: function() {
    this.isTurnedOn = true;
    alert("Car is turned on");
  }
};

function whatIsMyFavColor() {
  return testObject.favColors[1];
}

console.log(whatIsMyFavColor());
