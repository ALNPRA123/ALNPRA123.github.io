window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
  } else {
    document.getElementById("navbar").style.padding = "5px 10px";
  }
}

