var toggle=document.getElementById("nav-bar-wrapper");
function toggleMenu(){
    if(toggle.className==="nav-bar-wrapper"){
        toggle.className +=" responsive";
        
    }
    else{
        toggle.className="nav-bar-wrapper";

    }
}