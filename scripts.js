const navbar = document.querySelector("#navbar");

if(navbar){
    const showMenuButton = navbar.querySelector(".menu-show");
    const hideMenuButton = navbar.querySelector(".cover");

    showMenuButton.onclick = function(){
        navbar.classList.add("active");
    }

    hideMenuButton.onclick = function(){
        navbar.classList.remove("active");
    }
}