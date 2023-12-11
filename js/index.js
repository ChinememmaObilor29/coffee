$(function(){
  $("#toggleBtn").click(function(){
     $("nav").toggleClass("active");
     $("#toggleBtn").toggleClass("fa-bars");
     $("#toggleBtn").toggleClass("fa-xmark");
  });

  $(window).on("load scroll", function(){
    $("nav").removeClass("active");
    $("#toggleBtn").removeClass("fa-xmark");
    $("#toggleBtn").addClass("fa-bars");
  })
});


const myform = document.getElementById("myform");
const name = document.getElementById("name");
const message = document.getElementById("message");
const error = document.getElementById("errorEmail");

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(name.value === "" || message.value === ""){
    error.textContent = "Please fill in Fields";
  }
  else{
    error.textContent = name.value + "," + " " + "We've Recieved Your Message!";
    error.style.color = "whitesmoke";
    error.style.marginLeft = "150px";
  }
}