// function myFunction() {
//     // var ul = document.getElementById("myTopNav");
//     // var nav = document.getElementById("nav");
//     // // if (x.style.display == "none") {
//     // //     x.style.display = "block"
//     // // } else {
//     // //     x.style.display = "none"
//     // // }
//     // if (!ul.classList.contains('responsive')) {
//     //     ul.classList.add("responsive");
//     //     nav.classList.add('navtp');
//     // } else {
//     //     ul.classList.remove("responsive");
//     //     nav.classList.remove("navtp");
//     // }


//     var icon = document.getElementById('icon');
//     const mobile_nav = document.getElementsByClassName('mobile-nav')[0];

//     icon.addEventListener('click', () => {
//         if (!mobile_nav.classList.contains('mobile-nav-visibility')) {
//             mobile_nav.classList.add('mobile-nav-visibility')
//         } else {
//             mobile_nav.classList.remove('mobile-nav-visibility')
//         }
//     })

// }

var icon = document.getElementById('icon');
const mobile_nav = document.getElementsByClassName('mobile-nav')[0];
const mobile_nav_wrapper = document.getElementsByClassName('mobile-nav-wrapper')[0];

icon.addEventListener('click', () => {
    if (!mobile_nav.classList.contains('mobile-nav-visibility')) {
        // mobile_nav.style.display = "block"
        mobile_nav.classList.add('mobile-nav-visibility');
        mobile_nav_wrapper.classList.add('mobile-nav-wrapper-visibility')
    }
    // else {
    //     // mobile_nav.style.display = "none"
    //     mobile_nav.classList.remove('mobile-nav-visibility')
    // }
})