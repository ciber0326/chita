$(document).ready(function () {
  $('.hamburger').on('click', function () {
    
    $('body').toggleClass('open');
    $(this).toggleClass('active');
  })
  $('.toggle-image').on('click', function (e) {
    e.preventDefault() // Prevent default anchor behavior
    $('.toggle-target').slideToggle() // Toggle the image visibility with animation
  })
  var topSec01Slider = new Swiper('#topSec01Slider', {
    slidesPerView: 3, // Show 4 slides
    spaceBetween: 20, // Space between slides in pixels
    loop: true, // Enable looping
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span aria-label="bullet" class="' + className + '"></span>'
      }
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      // when window width is >= 320px
      340: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.6,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })
  
  var constructionSlider = new Swiper('#constructionSlider', {
    slidesPerView: 4, // Show 4 slides
    spaceBetween: 20, // Space between slides in pixels
    loop: true, // Enable looping
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span aria-label="bullet" class="' + className + '"></span>'
      }
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      // when window width is >= 320px
      340: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.6,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  })

  var topSec02Slider = new Swiper('#topSec03Slider', {
    slidesPerView: 2.5, // Show 4 slides
    spaceBetween: 20, // Space between slides in pixels
    loop: true, // Enable looping

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span aria-label="bullet" class="' + className + '"></span>'
      }
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },

    breakpoints: {
      // when window width is >= 320px
      340: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.6,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 2.5,
        spaceBetween: 20
      }
    }

  })

  // price page

  // When a price header is clicked
  $('.price-header')?.click(function () {
    var $currentBody = $(this).next('.price-body') // The corresponding price body

    // If the clicked item is already open, close it; otherwise, open it
    if ($currentBody.is(':visible')) {
      $currentBody.slideUp()
      $(this).find('img').css('transform', 'rotate(0deg)')
    } else {
      // Close all price bodies and reset arrows
      $('.price-body').slideUp()
      $('.price-header img').css('transform', 'rotate(0deg)')

      // Open the clicked price body and rotate its arrow
      $currentBody.slideDown()
      $(this).find('img').css('transform', 'rotate(180deg)')
    }
  })
  //accordion
  $('.accordion-header')?.click(function () {
    var $accordionBody = $(this).next('.accordion-body') // The corresponding price body

    // If the clicked item is already open, close it; otherwise, open it
    if ($accordionBody.is(':visible')) {
      $accordionBody.slideUp()
      $(this).find('img').css('transform', 'rotate(0deg)')
    } else {
      // Close all price bodies and reset arrows
      $('.accordion-body').slideUp()
      $('.accordion-header img').css('transform', 'rotate(0deg)')

      // Open the clicked price body and rotate its arrow
      $accordionBody.slideDown()
      $(this).find('img').css('transform', 'rotate(180deg)')
    }
  })

  // Set the first tab and content active by default for each tab-list
  $('.tab-list').each(function () {
    const firstHeader = $(this).find('.tab-header li:first-child')
    const firstBody = $(this).find('.tab-body > li:first-child')
    firstHeader.addClass('active')
    firstBody.addClass('active').fadeIn(0) // Show the first content without animation
  })

  // Tab click event scoped to the respective tab-list
  $('.tab-header li').click(function () {
    const $tabList = $(this).closest('.tab-list') // Get the parent tab-list
    const index = $(this).index() // Get the index of the clicked tab

    // Update tab headers within this tab-list
    $tabList.find('.tab-header li').removeClass('active')
    $(this).addClass('active')

    // Update tab contents within this tab-list
    $tabList.find('.tab-body > li.active').fadeOut(300, function () {
      $(this).removeClass('active') // Remove active class after fade-out
      $tabList.find('.tab-body > li').eq(index).fadeIn(300).addClass('active') // Fade in the new content and add active class
    })
  })

  // Initialize: Hide all FAQ bodies except the first
  $('.faq-body').hide()
  $('.faq-item:first-child .faq-body').show() // Show the first FAQ body

  $('.faq-item:first-child .header-icon div:first-child').css(
    'visibility',
    'hidden'
  ) // Hide horizontal line (minus)

  // Handle FAQ header click
  $('.faq-header').click(function () {
    const $faqItem = $(this).closest('.faq-item') // Get the clicked FAQ item
    const $faqBody = $faqItem.find('.faq-body') // Find the corresponding FAQ body

    // If the clicked FAQ body is already visible
    if ($faqBody.is(':visible')) {
      $faqBody.slideUp(300) // Hide the body

      $faqItem.find('.header-icon div:last-child').css('visibility', 'hidden') // Hide vertical line (plus)
    } else {
      // Hide all FAQ bodies and reset icons
      $('.faq-body').slideUp(300)

      $('.header-icon div:last-child').css('visibility', 'hidden') // Hide plus globally

      // Show the clicked FAQ body and adjust icons
      $faqBody.slideDown(300) // Show the body

      $faqItem.find('.header-icon div:last-child').css('visibility', 'visible') // Show plus
    }
  })
  $('.slideToggle').on('click', function () {
    $(this).next('.slideToggleTarget').slideToggle()
  })

  //-----------------------Modal Behaviour--------------------

  // Open modal (triggered by clicking any link or button to open modal)
  $('.open-modal').on('click', function (event) {
    event.preventDefault()

    // Disable body scroll when modal is open
    $('body').css('overflow', 'hidden')
    $('.modal-container').fadeIn(500) // Fade in the modal (500ms)
  })

  // Close modal (triggered by clicking the close button or outside the modal)
  $('.modal-close').on('click', function (event) {
    event.preventDefault()

    // Restore body scroll when modal is closed
    $('body').css('overflow', 'unset')
    $('.modal-container').fadeOut(500) // Fade out the modal (500ms)
  })

  // Close the modal when clicking outside the modal content
  $('.modal-container').on('click', function (event) {
    if ($(event.target).is('.modal-container')) {
      // Restore body scroll when modal is closed
      $('body').css('overflow', 'unset')
      $('.modal-container').fadeOut(500) // Fade out if clicked outside the modal
    }
  })
})
