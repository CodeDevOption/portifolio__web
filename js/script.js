const menu = document.querySelector(".menu");
const clos = document.querySelector(".cancel");
const nav = document.querySelector(".app > .links");

const show = ()=>{
    if(nav.style.display === "none" || nav.style.display === ""){
  
        nav.style.display = "flex";
        menu.style.display = "none";
        clos.style.display ="block";

        
    }
    

}

const hide = ()=>{
    if(nav.style.display === "flex"){
  
        nav.style.display = "none";
        menu.style.display = "";
        clos.style.display ="";

        
    }
    // alert("cliked");
}