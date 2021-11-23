
var  Userdata=[];

$("input").prop("required", true);

$(".notes-btn").click(function(){
  open("https://drive.google.com/drive/u/3/my-drive");
})


$(".ide").click(function(){
  open("https://www.onlinegdb.com/online_c_compiler");
})

$(".codepen").click(function(){
  open("https://www.codeply.com/p");
})




const emailEl = document.getElementById("email-el")
const fNameEl = document.getElementById("fname-el")
const lNameEl = document.getElementById("lname-el")
const passEl = document.getElementById("set-pass-el")
const signInEl = document.getElementById("sign-in-el")
const signUpEl=$("#sign-up-el")
const checkPass=document.getElementById("check-pass")
const checkEmail=document.getElementById("check-email")





  $("#toggle-password").on('click',function() {
   if (passEl.type === 'password') {
     passEl.type = 'text';
   }else  {
     passEl.type = 'password';
   }
  });



  // sign up page js

  $('#sign-up-el').on('click',function(){
    if(fNameEl.value.length <2 || fNameEl.value.lenght>12){
      alert("😑 your First name is either too short or too short name")
    open("sign-up.html","_self")
    }

    else if(lNameEl.value.length <2 || lNameEl.value.lenght>12){
      alert("😑 your Last name is either too short or too short name")
    open("sign-up.html","_self")
    }
 
    else if(emailEl.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\2{2,3})+$/)){
      alert("Please enter a valid email")
      open("sign-up.html","_self")

  }
 
   else if(passEl.value.length <=6){
    alert("password should atleast contain a number, an alphabet and a special character");
    open("sign-up.html","_self");
      }

else{
  Userdata.push({emaild:emailEl.value,passd:passEl.value})
  localStorage.setItem("userData",JSON.stringify(Userdata));
  open("sign-in.html","_self")
}

})

 


// sign in page js

$('#sign-in').on("click",function(){
   n =0
  var dataArray = JSON.parse(localStorage.getItem("userData"));
  for(var i=0;i<dataArray.length;i++){
    var k=dataArray[i].emaild
    var p=dataArray[i].passd
   if(k == checkEmail.value && p== checkPass.value){
      open("index.html","_self")
      break;
      }else{
        alert("Wrong login id or password")
      }

    }
  
  })

  

  

