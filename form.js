//if(lastName.value=="" && firstName.value=="" && telephone.value=="" && 
//mailAddress.value == "" && messageText.value=="")
//{
 //   return false;
//}

function validateForm(){
    var lastName= document.getElementById("lname");
    var firstName= document.getElementById("fname");
    var telephone= document.getElementById("phone");
    var mailAddress= document.getElementById("email");
    var messageText= document.getElementById("message");
    
    if(lastName.value =="" && firstName.value =="" && telephone.value =="" && 
    mailAddress.value == "" && messageText.value =="")
    {
       return false;
    }
 

  //Display data on console

  console.log("Last Name: " + lastName.value + '\n'
  + "First Name: " + firstName.value + '\n'
  + "Telephone: " + telephone.value + '\n'
  + "Mail Address:  " + mailAddress.value + '\n'
  + "Message: " + messageText.value );

     return true;

  }
  
  function executeSend(){
    if(validateForm()==true){
      openModal();
    }
  }

  var modal = document.getElementById("myModal");
  
  // Get the close button that closes the modal
  var closeBtn = document.getElementById("close");


  // When the user clicks the submit button, open the modal 
  function openModal() {
    console.log("hello");
    modal.style.display = "block";

    
  }

  // When the user clicks the close button, close the modal
  closeBtn.onclick = function() {
      modal.style.display = "none";
   
  }



  var form = document.getElementById("myForm");
  form.addEventListener("submit", function(e){
      e.preventDefault();}) 