/******************************************
    Version: 1.0
/****************************************** */

var myConfig = {
  type: 'wordcloud',
  
  options: {
    maxFontSize: 50,
    minFontSize: 10, 
    colorType: 'palette',
    palette: ['#2196F3', '#3F51B5', '#42A5F5', '#5C6BC0', '#64B5F6', '#7986CB', '#90CAF9', '#9FA8DA', '#BBDEFB', '#C5CAE9'], 
    // text: 'We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.',
    // text: 'Skills Skills Skills Skills C C++ C++ C# C# C# Python Python Dart Dart Dart Dart HTML HTML HTML MongoDB MySQL Git Github Postman Bootstrap AngularMaterial AWS Azure GCP Management Leadership Content-Writing Presentation'
    words :[
      {
        text:'Skills',
        count: 4
      },
      {
        text:'Dart',
        count: 3
      },
      {
        text:'C',
        count: 1
      },
      {
        text:'C++',
        count: 2
      },
      {
        text:'C#',
        count: 2
      },
      {
        text:'Python',
        count: 2
      },
      {
        text:'Web Scrapping',
        count: 1
      },
      {
        text:'Machine Learning',
        count: 1
      },
      {
        text:'MongoDB',
        count: 1
      },
      {
        text:'MySQL',
        count: 1
      },
      {
        text:'Postman',
        count: 1
      },
      {
        text:'HTML',
        count: 1
      },
      {
        text:'CSS',
        count: 1
      },
      {
        text:'Bootstrap',
        count: 1
      },
      {
        text:'Management',
        count: 2
      },
      {
        text:'Leadership',
        count: 1
      },
      {
        text:'Content Writing',
        count: 2
      },
      {
        text:'AWS',
        count: 1
      },
      {
        text:'Azure',
        count: 1
      },
      {
        text:'GCP',
        count: 1
      },
      {
        text:'Presentation',
        count: 2
      },
      {
        text:'Java',
        count: 1
      },   

    ],
  }
};
 
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: 200,
  width: '100%'
});

(function($) {
    "use strict";

	
	// Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });
	
    // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	  });

	// Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
		target: '#mainNav',
		offset: 56
	  });

	// Collapse Navbar
	  var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
		  $("#mainNav").addClass("navbar-shrink");
		} else {
		  $("#mainNav").removeClass("navbar-shrink");
		}
	  };
	// Collapse now if page is not at top
	  navbarCollapse();
	  // Collapse the navbar when page is scrolled
	  $(window).scroll(navbarCollapse);

	// Hide navbar when modals trigger
	  $('.portfolio-modal').on('show.bs.modal', function(e) {
		$(".navbar").addClass("d-none");
	  })
	  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
		$(".navbar").removeClass("d-none");
	  })

    // Scroll to top  		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
	// Banner 
	
    $('.heading').height( $(window).height() );
	$('.parallaxie').parallaxie();
	
    // LOADER
    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

	// Gallery Filter
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.gallery-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.gallery-list').isotope({
                itemSelector: '.gallery-grid'
            });

        });
	
    // FUN FACTS   

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    // CONTACT
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

})(jQuery);