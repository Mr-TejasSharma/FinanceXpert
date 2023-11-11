var option =document.querySelector(".option");
var hmb =document.querySelector(".hmb");
var backoption =document.querySelector(".back");
var profile =document.querySelector(".profile");
var hmb =document.querySelector(".hmb");
var background =document.querySelector(".posts");
var up=document.querySelector(".up");
var botimg=document.querySelector(".bot");

function blurbg(value)
{
    background.style.filter=`blur(${value}px)`;
}
function options(value1,value2)
{
    option.style.display=`${value1}`;
    hmb.style.display=`${value2}`;
}
hmb.addEventListener('click',function(){
    options("block","none");
    blurbg(3);
})
backoption.addEventListener('click',function(){
    options("none","block");
    blurbg(0);
})
function moveup(event,round)
{
    var lastscrollTop=0;
    window.addEventListener("scroll",function(){
        var scrollTop=document.documentElement.scrollTop;
        if(scrollTop>lastscrollTop){
            event.style.top="-10vh";
            event.style.rotate=`${round}`;
        }
        else{
            event.style.top="1vh";
            event.style.rotate="0deg";
        }
        options("none","block");
        blurbg(0);
        lastscrollTop=scrollTop;
    })
}
function movedown(event,round)
{
    var lastscrollTop=0;
    window.addEventListener("scroll",function(){
        var scrollTop=document.documentElement.scrollTop;
        if(scrollTop>lastscrollTop){
            event.style.bottom="-10vh";
            event.style.rotate=`${round}`;
        }
        else{
            event.style.bottom="1vh";
            event.style.rotate="0deg";
        }
        lastscrollTop=scrollTop;
    })
}
moveup(profile,"90deg");
moveup(hmb,"-90deg");
movedown(up,"90deg");
movedown(botimg,"-90deg");
