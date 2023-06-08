const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


  (function($) {
    "use strict";
    $.fn.sliderResponsive = function(settings) {
      
      var set = $.extend( 
        {
          slidePause: 3000,
          fadeSpeed: 800,
          autoPlay: "on",
          showArrows: "on", 
          hideDots: "on", 
          hoverZoom: "on",
          titleBarTop: "off"
        },
        settings
      ); 
      
      var $slider = $(this);
      var size = $slider.find("> div").length; //number of slides
      var position = 0; // current position of carousal
      var sliderIntervalID; // used to clear autoplay
        
      // Add a Dot for each slide
      $slider.append("<ul></ul>");
      $slider.find("> div").each(function(){
        $slider.find("> ul").append('<li></li>');
      });
        
      // Put .show on the first Slide
      $slider.find("div:first-of-type").addClass("show");
        
      // Put .showLi on the first dot
      $slider.find("li:first-of-type").addClass("showli")
  
       //fadeout all items except .show
      $slider.find("> div").not(".show").fadeOut();
      
      // If Autoplay is set to 'on' than start it
      if (set.autoPlay === "on") {
          startSlider(); 
      } 
      
      // If showarrows is set to 'on' then don't hide them
      if (set.showArrows === "on") {
          $slider.addClass('showArrows'); 
      }
      
      // If hideDots is set to 'on' then hide them
      if (set.hideDots === "on") {
          $slider.addClass('hideDots'); 
      }
      
      // If hoverZoom is set to 'off' then stop it
      if (set.hoverZoom === "off") {
          $slider.addClass('hoverZoomOff'); 
      }
      
      // If titleBarTop is set to 'on' then move it up
      if (set.titleBarTop === "on") {
          $slider.addClass('titleBarTop'); 
      }
  
      // function to start auto play
      function startSlider() {
        sliderIntervalID = setInterval(function() {
          nextSlide();
        }, set.slidePause);
      }
      
      // on mouseover stop the autoplay
      $slider.mouseover(function() {
        if (set.autoPlay === "on") {
          clearInterval(sliderIntervalID);
        }
      });
        
      // on mouseout starts the autoplay
      $slider.mouseout(function() {
        if (set.autoPlay === "on") {
          startSlider();
        }
      });
  
      //on right arrow click
      $slider.find("> .right").click(nextSlide)
  
      //on left arrow click
      $slider.find("> .left").click(prevSlide);
        
      // Go to next slide
      function nextSlide() {
        position = $slider.find(".show").index() + 1;
        if (position > size - 1) position = 0;
        changeCarousel(position);
      }
      
      // Go to previous slide
      function prevSlide() {
        position = $slider.find(".show").index() - 1;
        if (position < 0) position = size - 1;
        changeCarousel(position);
      }
  
      //when user clicks slider button
      $slider.find(" > ul > li").click(function() {
        position = $(this).index();
        changeCarousel($(this).index());
      });
  
      //this changes the image and button selection
      function changeCarousel() {
        $slider.find(".show").removeClass("show").fadeOut();
        $slider
          .find("> div")
          .eq(position)
          .fadeIn(set.fadeSpeed)
          .addClass("show");
        // The Dots
        $slider.find("> ul").find(".showli").removeClass("showli");
        $slider.find("> ul > li").eq(position).addClass("showli");
      }
  
      return $slider;
    };
  })(jQuery);
  
  
   
  //////////////////////////////////////////////
  // Activate each slider - change options
  //////////////////////////////////////////////
  $(document).ready(function() {
    
    $("#slider1").sliderResponsive({
    // Using default everything
       slidePause: 3000,
       fadeSpeed: 800,
       autoPlay: "on",
       showArrows: "on", 
       hideDots: "off", 
       hoverZoom: "on", 
      // titleBarTop: "off"
    });
    
    
  }); 
  
  $(document).ready(function() {
    // Toggle dropdown on click
    $('.nav-links li:has(ul)').click(function(e) {
      e.stopPropagation();
      $(this).toggleClass('open');
      $(this).find('ul').slideToggle();
    });
  
    // Add chevron icon to parent li elements
    $('.nav-links li:has(ul)').addClass('dropdown');
  
    // Append chevron icon to parent li elements
    $('.nav-links li.dropdown > a').append('<span class="chevron"></span>');
  });
  
  

  document.addEventListener("DOMContentLoaded", function() {
    const popupOverlays = document.querySelectorAll(".popup-overlay");
  
    document.querySelectorAll(".popup-btn").forEach(function(btn, index) {
      btn.addEventListener("click", function() {
        popupOverlays[index].style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });
  
    document.addEventListener("click", function(event) {
      if (event.target.classList.contains("closePopup")) {
        const popupOverlay = event.target.closest(".popup-overlay");
        popupOverlay.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  });
  
