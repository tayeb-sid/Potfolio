btn  = document.getElementById("hamburger")
dropdown= document.getElementsByClassName("nav-right")[0]
links= document.getElementsByClassName("navbar-links")[0]
btn.addEventListener('click', () => {
    dropdown.classList.toggle('active')
    links.classList.toggle('active')

});


scroll_up_btn = document.getElementsByClassName("scroll-up-btn")[0]

window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        scroll_up_btn.style.display = "block";
    } else {
        scroll_up_btn.style.display = "none";
    }
});
