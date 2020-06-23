var slideIndex = 1;
showSlides(slideIndex);

function inizializza() {
  showSlides(slideIndex)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

function burgermenu() {
	if (document.getElementById("myDropdown").style.display == "flex") {
	    document.getElementById("myDropdown").style.display = "none";
	} else {
	    document.getElementById("myDropdown").style.display = "flex";
	    document.getElementById("myDropdown").style.flexDirection = "column";
	}
}


function inviamail() {
  if (document.getElementById("writeHere").style.display == "flex") {
      document.getElementById("writeHere").style.display = "none";
      document.getElementById("inviata").style.display = "none";
      document.getElementById("scomparitiprego").style.display = "flex";
  } else {
      document.getElementById("writeHere").style.display = "flex";
      document.getElementById("writeHere").style.flexDirection = "column";
      document.getElementById("scomparitiprego").style.display = "none";
      document.getElementById("inviata").style.display = "flex";
  }
}


function mailinviata() {
  if (document.getElementById("writeHere").style.display == "flex") {
      document.getElementById("writeHere").style.display = "none";
      document.getElementById("inviata").innerHTML = "GRAZIE, GRINGO!";
  }
}


function info_alonso() {
  if (document.getElementById("infoeroe1").style.display == "none") {
      document.getElementById("infoeroe1").style.display = "flex";
} else {
      document.getElementById("infoeroe1").style.display = "none";
  }
}

function info_luchano() {
  if (document.getElementById("infoeroe2").style.display == "none") {
      document.getElementById("infoeroe2").style.display = "flex";
} else {
      document.getElementById("infoeroe2").style.display = "none";
  }
}

function info_letitia() {
  if (document.getElementById("infoeroe3").style.display == "none") {
      document.getElementById("infoeroe3").style.display = "flex";
} else {
      document.getElementById("infoeroe3").style.display = "none";
  }
}