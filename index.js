const icon = document.getElementById('icon');
const mobile_nav = document.getElementsByClassName('mobile-nav')[0];
const mobile_nav_wrapper = document.getElementsByClassName('mobile-nav-wrapper')[0];

icon.addEventListener('click', () => {
    if (!mobile_nav.classList.contains('mobile-nav-visibility')) {
        mobile_nav.classList.add('mobile-nav-visibility');
    } else {
        mobile_nav.classList.remove('mobile-nav-visibility')
    }
})

window.onscroll = function() {
    mobile_nav.classList.remove('mobile-nav-visibility')
        // console.log("SCROLLED")
}