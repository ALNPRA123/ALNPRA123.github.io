// Function to GeneratePdf//
		function GeneratePdf() {
			var element = document.getElementById('form-print');
			html2pdf(element);
		}

// Function to connect webcam//
       // camera stream video element
  let on_stream_video = document.querySelector('#camera-stream');
  // flip button element
  let flipBtn = document.querySelector('#flip-btn');

  // default user media options
  let constraints = { audio: false, video: true }
  let shouldFaceUser = true;

  // check whether we can use facingMode
  let supports = navigator.mediaDevices.getSupportedConstraints();
  if( supports['facingMode'] === true ) {
    flipBtn.disabled = false;
  }

  let stream = null;

  function capture() {
    constraints.video = {
        width: {
        min: 192,
        ideal: 192,
        max: 192,
      },
      height: {
        min: 192,
        ideal: 192,
        max: 192
      },
      facingMode: shouldFaceUser ? 'user' : 'environment'
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        stream  = mediaStream;
        on_stream_video.srcObject = stream;
        on_stream_video.play();
      })
      .catch(function(err) {
        console.log(err)
      });
  }

  flipBtn.addEventListener('click', function(){
    if( stream == null ) return
    // we need to flip, stop everything
    stream.getTracks().forEach(t => {
      t.stop();
    });
    // toggle / flip
    shouldFaceUser = !shouldFaceUser;
    capture();
  })

  capture();

  document.getElementById("capture-camera").addEventListener("click", function() {
    // Elements for taking the snapshot
      const video = document.querySelector('video');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
  });
//end page//

//page for smoothing//
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//end page//