$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

function initMaps() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 46.977257, lng: 28.877372},
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
  });

  var infowindow = new google.maps.InfoWindow({
      content: '<b>«Swiss Exclusive Services» GMBH</b>'
  });
  var image = 'img/marker.png';
  var marker = new google.maps.Marker({
    position: {lat: 46.977257, lng: 28.877372},
    map: map,
    icon: image
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 100);
  });
};

$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){
    $(this).remove();
  });
});

jQuery(document).ready(function($) {

  if($(".fp-slider").length>0) {
    $(".fp-slider").owlCarousel({
      items: 1,
      mouseDrag: false,
      nav:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      animateOut: 'fadeOut',
      navText:[
        '<img src="img/slide-prev.svg" alt="">',
        '<img src="img/slide-next.svg" alt="">'
      ],
      thumbs: false,
    });
  };

  if($(".default-slider").length>0) {
    $(".default-slider").owlCarousel({
      items: 1,
      mouseDrag: false,
      nav:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      animateOut: 'fadeOut',
      navText:[
        '<img src="img/slide-prev.svg" alt="">',
        '<img src="img/slide-next.svg" alt="">'
      ],
      thumbs: false,
    });
  };

  if($(".rent-slider").length>0) {
    $(".rent-slider").owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      thumbs: true,
      thumbImage: true,
    });
  };

  $.each( $( ".fp-slider .item img, .services-list_item-image img, .blog-list_item-image img" ), function(){
    var cssValues = {
      "background":"url(" + $(this).attr("src") + ") no-repeat center center scroll",
      "background-size":"cover"
    }
    $(this).hide();
    $(this).parent().css(cssValues);
  });

  $('.rent-slider').each(function() {
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
		    navigateByImgClick: false,
      },
      callbacks: {
        buildControls: function() {
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
      }
    });
	});

	$('.form-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

$(".toogle-menu").on('click', function() {
  $(this).toggleClass('opened');
  $('.navbar-menu').find('ul').slideToggle(120);
});




});

function screenClass() {
  if($(window).innerWidth() < 640) {
    $.each( $( ".header-default .header-styled_article img, .header-styled .header-styled_article img" ), function(){
      var cssValues = {
        "background":"url(" + $(this).attr("src") + ") no-repeat center center scroll",
        "background-size":"cover"
      }
      $(this).css('visibility', 'hidden');
      $(this).parent().css(cssValues);
    });
  } else {
    $(this).css('visibility', 'visible');
  }
};
screenClass();

// And recheck when window gets resized.
$(window).bind('resize',function(){
    screenClass();
});
