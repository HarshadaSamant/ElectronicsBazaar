$(document).ready(function(){
  $('.product_carousel').owlCarousel({
      loop:true,
      margin:14,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          500:{
              items:2
          },

          769:{
              items:3
          },          
          1000:{
              items:4
          }
      }
  })

    $('.feature_carousel').owlCarousel({
      loop:false,
      nav:false,
      responsive:{
          0:{
            items:2
          },
          500:{
              items:2
          },
          680:{
              items:5
          }
      }
  })


      $('.payment_carousel').owlCarousel({
      loop:false,
      nav:false,
      responsive:{
          0:{
            items:3
          },
          500:{
              items:4
          },
          680:{
              items:7
          }
      }
  })


});