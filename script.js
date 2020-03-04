/*function myFunction() {
    var x = document.getElementById("#navbarSupportedContent");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/
  /*function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
function toggleSidebar(){
  document.getElementById("navbarSupportedContent").classList.add.toggle('active');
}*/           
function openFunction() {
document.getElementById("mydiv").style.width='100%';
}
function closeNav() {
  document.getElementById("mydiv").style.width = "0%";
}  
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   var element = document.getElementById("logo");
   element.classList.add("mystyle");
   }
   else{
       var element = document.getElementById("logo");
   element.classList.remove("mystyle");
   }
}   

