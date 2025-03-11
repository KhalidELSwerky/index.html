let container =document.querySelector('.container2');
let ul =document.querySelector('ul');

window.onload = function(){
    if(window.navigator.onLine){
        khalid()
    }
    else{
        gamal()
    }
}

window.addEventListener("online",function(){
    khalid()
});

window.addEventListener("offline",function(){
    gamal()
});

function khalid(){
   window.location.href = "https://khalidelswerky.github.io/index.html/"
}

function gamal(){
    
}