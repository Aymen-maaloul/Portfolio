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