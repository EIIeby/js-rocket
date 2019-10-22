/*
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
*/

var timer = null;
var countDownNumber = 10;

function changeState(state) {
  document.body.className = "body-state" + state;
  clearInterval(timer);
  countDownNumber = 10;
  document.getElementById("countdown").innerHTML = countDownNumber;

  if (state == 2) {
    timer = setInterval(function() {
      countDownNumber = countDownNumber - 1;
      document.getElementById("countdown").innerHTML = countDownNumber;

      if (countDownNumber == 5) {
        //nerveous
      }

      if (countDownNumber == 2) {
        //excited
      }

      if (countDownNumber <= 0) {
        changeState(3);
      }
    }, 1000);
    //document.getElementById("countdown").innerHTML = 9;
  } else if (state == 3) {
    var succes = setTimeout(function() {
      var randomNumber = Math.round(Math.random() * 10);
      console.log("Random Number: " + randomNumber);

      if (randomNumber > 5) {
        changeState(4);
      } else {
        changeState(5);
      }
    }, 2000);
  }
}
