var toggle=document.getElementById("nav-bar-custom");
var centerText=document.getElementById("center-name-text");
function toggleMenu(){
    if(toggle.className==="nav-bar-custom"){
        toggle.className +=" responsive";
        toggle.style.display="block";
        centerText.style.height="19.7vh"
    }
    else{
        toggle.className="nav-bar-custom";
        toggle.style.display="flex";
        centerText.style.height="77.5vh"

    }
}

// function of text delay
var textDiv= document.getElementById("typed-data");
var textToDisplay = new Array("Developer", "Gamer", "Designer","Photographer");
var counter=0;
function changeText(){
   textDiv.innerHTML=textToDisplay[counter];

   if(counter<textToDisplay.length-1){
    counter++;
   }
   else{
    counter=0;
   }
   setTimeout("changeText()",3000);
   
}
