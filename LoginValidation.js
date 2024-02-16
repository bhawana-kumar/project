$(document).ready(function(){
    $("#fNameError").hide();
    let UserNameError=true;
    $("#userEmailId").keyup(function(){
        validateUserName();
    });
    function validateUserName(){
        let userName=$("#userEmailId").val();
        if(userName.length==""){
            $("#fNameError").show();
            $("#fNameError").text("*Please Enter Something");
            UserNameError=false;
            return false;
        }
        else if(userName.length<3||userName.length>15){
            $("#fNameError").show();
            $("#fNameError").text("*Length Of username must between 3 and 15*");
            $("#fNameError").css("color","red");
            UserNameError=false;
            return false;
        }
        else{
            $("#fNameError").hide();
            return true;
        }
    }
    $("#Submitbtn").click(function(){
       
        if(validateUserName())
       return true;//Give LOCATION OF HOME PAGE
       else
       { return false;
      }
    })
  
})

   
