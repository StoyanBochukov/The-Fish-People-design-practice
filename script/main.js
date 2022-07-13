/**
 * Hamburger Menu
 */
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav-wrapper');
const faders = document.querySelectorAll('.fade-in');


function showNav(){
  menu.classList.add('show-menu')
  menuOverlay.classList.add('transparentBcg');
  navbar.classList.add('nav-active');
}
function closeNav(){
  menu.classList.remove('show-menu');
  menuOverlay.classList.remove('transparentBcg');
  navbar.classList.remove('nav-active')
}
navOpen.addEventListener('click', () =>{
  showNav()
});
navClose.addEventListener('click', () =>{
  closeNav()
})
menuOverlay.addEventListener('click', (e) =>{
  closeNav()
  console.log(e.target)
})
//Acordions Mobile
document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown;
  if(isDropdownButton){
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }
});
document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
  if (dropdown === currentDropdown) return
  dropdown.classList.remove('active')
})


/**
 * Navbar Active
 */


 $(document).ready(function(){
  $(window).on('load scroll',function(){
    if($(window).scrollTop() > 40){
      $('.nav-wrapper').addClass('nav-active');
    }else {
      $('.nav-wrapper').removeClass('nav-active');
    }

    if(window.matchMedia('(max-width: 1420px)').matches){
      if($(window).scrollTop() > 40){
        $('.nav-wrapper').addClass('nav-active');
        $('.nav-list').addClass('nav-active-2');
      }else {
        $('.nav-wrapper').removeClass('nav-active');
        $('.nav-list').removeClass('nav-active-2');
      }
    }
    
    
    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });
});


/**
 * Top Slider
 *
 */

var splide = new Splide( '#slider1', {
    direction: 'ltr',
    direction: 'rtl',
    type : 'fade',
    rewind: true,
    autoplay: true,
    speed: 3200,
    classes: {
      pagination: 'splide__pagination pagination-disabled',
      page      : 'splide__pagination__page',
      arrows: 'splide__arrows arrows-bottom',
      prev  : 'splide__arrow--prev arrow-prev',
      next  : 'splide__arrow--next arrow-next',
    },     
  } );
splide.mount();


var splide = new Splide( '#slider2', {
  direction: 'ltr',
  direction: 'rtl',
  perPage: 1,
  speed: 1200,
  autoplay: true,
  arrows: false,
  type: 'loop',
  classes: {
    pagination: 'splide__pagination pagination-disabled',
    page      : 'splide__pagination__page',
  }, 
} );

splide.mount();

/**
 * Section Observers Fadee-in effect
 */

 const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

 
