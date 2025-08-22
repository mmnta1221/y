let slideIndex = 0
function showSlide(n){
    const slides = document.getElementsByClassName("slide")
    var dots = document.getElementsByClassName("dot");
    if(n >= slides.length){
        slideIndex = 0;
    }
    if(n < 0){
        slideIndex = slides.length - 1;
    }
    for(var i=0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block"
    dots[slideIndex].className += " active";

}

function moveSlide(n){
    showSlide(slideIndex += n)
}

showSlide(slideIndex)
function menu(){
    var menuPanel = document.querySelector(".menu-panel")
    // if(menuPanel.style.opacity === "0 " || menuPanel.style.opacity ===""){
    //     menuPanel.style.opacity = "1"
    // }
    // else{
    //     menuPanel.style.opacity = "0"
    // }
    if (menuPanel.classList.contains("show-menu")){
        menuPanel.classList.remove("show-menu");

    }
    else{
        menuPanel.classList.add("show-menu");
    }
}
var acc = document.getElementsByClassName('accordeon')
for(var i=0; i<acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("accordeon-active")

        var acc_pannel = this.nextElementSibling
 

        if(acc_pannel.style.maxHeight){
            acc_pannel.style.maxHeight = null;

        }
else{
    acc_pannel.style.maxHeight = acc_pannel.scrollHeight + "px";
}

        // if(acc_pannel.style.display ==="block"){
        //     acc_pannel.style.display = "none"
        // }
        // else{
        //     acc_pannel.style.display = "block"
        // }`


    })
}