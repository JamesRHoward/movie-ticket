function Ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
  this.price = 10;
}

Ticket.prototype.ticketPrice = function() {
  if (this.age === "Youth" || this.age === "Senior" || this.time === "12pm") {
    return this.price -= 5;
  } else if (this.age === "Teenager" || this.time === "3pm") {
    return this.price -= 3;
  }
  return this.price;
}

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();

    var movie = $("select#movie").val();
    var age = $("select#age").val();
    var time = $("select#time").val();
    var newTicket = new Ticket(movie, age, time);
    newTicket.ticketPrice();

    $(".movie").text(newTicket.movie);
    $(".time").text(newTicket.time);
    $(".price").text(newTicket.price);
    $("#result").show();
  });
});
