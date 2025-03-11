let btnOpen =document.getElementById("btnOpen");
let btnClose =document.getElementById("btnClose");
let menu =document.getElementById("menu");
let sidebar =document.getElementById("sidebar");
let identfy1 =document.getElementById("identfy");
let home =document.getElementById("home");
let body =document.body;






sidebar.style.display="none";
btnClose.style.display="none";







btnOpen.onclick=function(){
    
    sidebar.style.display="block";
    btnOpen.style.display="none";
    btnClose.style.display="block";
    menu.style.behavior="smooth"
    window.scroll({
            top:0,
            behavior:"smooth"
        });
    }





btnClose.onclick=function(){
    sidebar.style.display="none";
    btnOpen.style.display="block";
    btnClose.style.display="none";
    

}





