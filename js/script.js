var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(
    prompt(`What's the total budget for your trip? (i.e. 899.99)`)
  );
  var accomodation = Number(
    prompt(`What are your accomodation costs? (i.e. 399.99)`)
  );
  var numDays = Number(prompt(`How many days will your trip last? (i.e. 12)`));
};

var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  var daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spent up to $${daily} each day, however you'd like! Enjoy your stay~`;
};
