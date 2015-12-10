$(document).ready(function() {
    event.preventDefault();
    $("#happyfeet").animate({ "left": "105%", "bottom": "105%", "width": "110px", "height": "110px"}, 5500);

    $("#text-logo").delay(5400).slideDown();




  setTimeout(function(){
      window.location='home.html';
  }, 7000);

});
