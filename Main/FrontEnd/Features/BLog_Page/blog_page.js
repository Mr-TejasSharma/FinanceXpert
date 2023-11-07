var option =document.querySelector(".option");
var hmb =document.querySelector(".hmb");
var backoption =document.querySelector(".back");
var ownprofilepic =document.querySelector(".profilepic");

hmb.addEventListener('click',function(){
    option.style.display="block";
    hmb.style.display="none";
})
backoption.addEventListener('click',function(){
    option.style.display="none";
    hmb.style.display="block";
})
