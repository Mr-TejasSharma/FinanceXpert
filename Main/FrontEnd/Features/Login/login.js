const SIGNUP=document.querySelector("#SIGNUP");
const SIGNIN=document.querySelector("#SIGNIN");

var signin=document.querySelector(".signin");
var signin_form=document.querySelector(".signin_form");
var signup=document.querySelector(".signup");
var signup_form=document.querySelector(".signup_form");
SIGNUP.addEventListener("click",
function (){
    signin.style.display="none";
    signin_form.style.display="none";
    signup.style.display="block";
    signup_form.style.display="block";  
});

SIGNIN.addEventListener("click",
function (){  
    signin.style.display="block";
    signin_form.style.display="block";
    signup.style.display="none";
    signup_form.style.display="none";  
});
