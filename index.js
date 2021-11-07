function myFunction() {
    var ul = document.getElementById("myTopNav");
    var nav = document.getElementById("nav");
    // if (x.style.display == "none") {
    //     x.style.display = "block"
    // } else {
    //     x.style.display = "none"
    // }
    if (!ul.classList.contains('responsive')) {
        ul.classList.add("responsive");
        nav.classList.add('navtp');
    } else {
        ul.classList.remove("responsive");
        nav.classList.remove("navtp");
    }

}