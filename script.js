function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_xqfvntf";
    const templateID = "template_a1alvip";
  if(!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("message").value){
    alert('Please enter your information')
      
  
  }
  else{
  
  emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("thank you")
  
      })
      .catch(err=>console.log(err));
}}
$(document).ready(function(){
  $(".ml").click(function(){
      $("li").fadeIn(500);
      $(".ml").fadeOut(500);
      $(".nl").fadeIn(500);
  });
  $(".home").click(function(){
    $("li").fadeOut();
    $(".ml").fadeIn();
    $(".nl").fadeOut(500);
    $(".aymendev").fadeIn();
});
$(".about").click(function(){
  $(".ml").fadeIn();
  $(".nl").fadeOut(500);
  $(".aymendev").fadeIn();
});
$(".projects").click(function(){
$(".ml").fadeIn();
$(".nl").fadeOut(500);
$(".aymendev").fadeIn();
});
$(".contact").click(function(){
$(".ml").fadeIn();
$(".nl").fadeOut(500);
$(".aymendev").fadeIn();
});
  $(".nl").click(function(){
      $(".ml").fadeIn();
      $(".nl").fadeOut(500);
      $(".aymendev").fadeIn();
  });
  setTimeout(function(){
      $(".custom-loader").fadeToggle();
      $(".loa").fadeToggle();
  }, 3000);
});
