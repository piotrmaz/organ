// FOOTER DATE
$(".footer-date").html(new Date().getFullYear());

// SLICK CAROUSEL HOME page
$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 2,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
  });
});

// VALIDATION form Bootstrap

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


$('#number').click(function() {
  $(this).find('span').text($(this).data('last'));
});

$('#email').click(function() {
  $(this).find('span').text($(this).data('last'));
});


window.onscroll = function() {
  myFunction()
};
// Get the navbar
var navbar = document.getElementById("navigation");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(document).ready(function() {
  var url = window.location;
  $('ul.navbar-nav a[href="' + url + '"]').parent().addClass('active');
  $('ul.navbar-nav a').filter(function() {
    return this.href == url;
  }).parent().addClass('active');
});


// Get the modal
var modal = document.getElementById("krippen-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("krippen");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }


// musicplayer
jQuery(document).ready(function() {
  // inner variables
  var song;
  var tracker = $('.tracker');
  var volume = $('.volume-button');

  function initAudio(elem) {
    var url = elem.attr('audiourl');
    var title = elem.text();
    var cover = elem.attr('cover');
    var artist = elem.attr('artist');

    $('.player .title').text(title);
    $('.player .artist').text(artist);
    $('.player .cover').css('background-image', 'url(http://www.szalajda-organy.pl/audio/' + cover + ')');;

    song = new Audio('http://www.szalajda-organy.pl/audio/' + url);


    $('.playlist li').removeClass('active');
    elem.addClass('active');
  }

  function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ':' + sec;
  }
  // set volume
  var volumeControl = document.getElementById('volume-bar');
  volumeControl.addEventListener('change', function() {
    song.volume = this.value;
  });

  function playAudio() {
    song.ontimeupdate = function() {
      $(".tracker").css("width", song.currentTime / song.duration * 100 + "%");
      var currTimeDiv = document.querySelector("duration");
      var currTime = Math.floor(song.currentTime).toString();
      currTime = formatSecondsAsTime(currTime);
      $(".duration").html(currTime);
    }
    song.play();
    $('.play-button').addClass('hidden');
    $('.pause-button').addClass('visible');
  }

  function stopAudio() {
    song.pause();
    $('.play-button').removeClass('hidden');
    $('.pause-button').removeClass('visible');
  }
  // play click
  $('.play-button').click(function(e) {
    e.preventDefault();
    playAudio();
  });
  // pause click
  $('.pause-button').click(function(e) {
    e.preventDefault();
    stopAudio();
  });
  // forward click
  $('.fwd-button').click(function(e) {
    e.preventDefault();
    stopAudio();
    var next = $('.playlist li.active').next();
    if (next.length == 0) {
      next = $('.playlist li:first-child');
    }
    initAudio(next);
    playAudio();
  });

  // rewind click
  $('.rew-button').click(function(e) {
    e.preventDefault();
    stopAudio();
    var prev = $('.playlist li.active').prev();
    if (prev.length == 0) {
      prev = $('.playlist li:last-child');
    }
    initAudio(prev);
    playAudio();
  });

  // playlist elements - click
  $('.playlist li').click(function() {
    stopAudio();
    initAudio($(this));
    playAudio();
  });
  initAudio($('.playlist li:first-child'));
});

document.addEventListener("keydown", function(event) {
  ChangeImg(event.key);
});

function ChangeImg(key) {
  switch (key) {
    case "ArrowRight":
      $(".carousel-control-next-icon").click();
      break;
    case "ArrowLeft":
      $(".carousel-control-prev-icon").click();
      break;
      case "Escape":
        $(".collapse").removeClass("show");
        break;
		case "MediaTrackPrevious":
		$('.rew-button').click();
		break;
		case "MediaTrackNext":
		$('.fwd-button').click();
		break;
    default:
      console.log("");
  }
}
