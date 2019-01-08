// intro to javascript

$(document).ready(function() {
  // alert($("#css-item").text());
    // alert("jQuery is working");
    $("#goal-button").click(function() {
      $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
      $("#new-goal").val("");
    })  
  })