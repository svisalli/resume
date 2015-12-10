//google form.js
//forporssing forms and sending data to Google Docs

// $("#formButton").click(function() {
//   event.preventDefault();
//   $("#leftBlockForm").animate({ "width": "30%"}, 7200);
//   $("#rightBlockForm").animate({ "width": "70%"}, 7200);
// });

function postToGoogle(){
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var partySize = $("#partySize").val();
  var highChairs = $("#highChairs").val();
  var phone = $("#phone").val();

  $.ajax({
    url:"https://docs.google.com/forms/d/140N_T9u2PkmIwbOYxz1DoFib-GVl3pGb7Otd8DFb6ns/formResponse",
    data: {
      "entry_1832111540": firstName,
      "entry_2007840902": lastName,
      "entry_184527348": partySize,
      "entry_1986121851": highChairs,
      "entry_552176887": phone
    },
    type: "POST",
    dataType: "json",
    statusCode: {
      0: function(){
        window.location.replace("thank-you.html");
      },
      200: function(){
        window.location.replace("thank-you.html");
      }
    }
  });
}

$(document).ready(function() {
  $("#submit").click(function(){
    event.preventDefault();
    postToGoogle();
  })
})
