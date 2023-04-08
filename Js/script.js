var dropbtn = document.getElementById("dropbtn");
var dropdown_content = document.getElementById("dropdown-content");

var dropbtn2 = document.getElementById("dropbtn2");
var dropdown_content2 = document.getElementById("dropdown-content2");

var dropbtn3 = document.getElementById("dropbtn3");
var dropdown_content3 = document.getElementById("dropdown-content3")

dropbtn.addEventListener("click", () => {
    if(dropdown_content.style.display == "block"){
        dropdown_content.style.display = "none";
      }
      else {
        dropdown_content.style.display = "block";
      }
})


// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu

  if(dropdown_content2.style.display == "block"){
    dropdown_content2.style.display = "none";
  }
  else {
    dropdown_content2.style.display = "block";
  }

});


dropbtn3.addEventListener("click", () => {
    if(dropdown_content3.style.display == "block"){
        dropdown_content3.style.display = "none";
      }
      else {
        dropdown_content3.style.display = "block";
      }
})


