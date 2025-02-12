let btnOpen =document.getElementById("btnOpen")
let btnClose =document.getElementById("btnClose")
let menu =document.getElementById("menu")
let sidebar =document.getElementById("sidebar")


sidebar.style.display="none";
btnClose.style.display="none";








btnOpen.onclick=function(){
    sidebar.style.display="block";
    btnOpen.style.display="none";
    btnClose.style.display="block";

}



btnClose.onclick=function(){
    sidebar.style.display="none";
    btnOpen.style.display="block";
    btnClose.style.display="none";

}


