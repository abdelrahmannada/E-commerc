$(document).ready(function(){

  $('#search, .fa-search').mouseenter(function(){
    $('.logo').hide();
  });
  $('#search, .fa-search').mouseleave(function(){
    $('.logo').show();
  });


  $('.header .fa-bars').click(function (){
    $('.header .navbar').toggle();
    $(this).toggleClass('fa-times');
  });

  $('.header .navbar , .header .navbar a').click(function(){
    $('.navbar').hide();
    $('.fa-bars').removeClass('fa-times');
  });


  $('.home-slider').owlCarousel({
    loop : true,
    margin:10,
    nav: true,
    items:1,
    autoplay:true
  });

  $('.product-slider').owlCarousel({
    loop : true,
    nav: true,
    
    item: 3,
    autoplay:true,
    center : true,
    responsive:{
      0:{
        item: 1,
        nav:true
      },
      600:{
        item:2
      },
      1000:{
        item:3
      }
    }
  });
  $('.review-slider').owlCarousel({
    loop : true,
    nav: true,
    margin: 10,
    item: 1,
    autoplay:true,
    center : true,
    
  });

});