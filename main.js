
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');

const mobileMenu  = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);


function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if(isAsideOpen){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if(isAsideOpen){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
}
