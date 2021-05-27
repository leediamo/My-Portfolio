const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLins = document.querySelectorAll ('.nav-links li')

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    });
    //Animate Links
    navLins.forEach((link, index)=> {
        console.log(index);
        link.style.animation =`navLinkFade 0.5s ease forwards ${index / 5}s`;
        console.log(index / 7)
    });
}


 navSlide();