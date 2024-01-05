function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

//submit button for newsletter
myFunction()
{
  
}

function charCount() {
  var textEntered = document.getElementById('text').value;
  var msg = document.getElementById('msg');
  var counter = (10-(textEntered.length));
  msg.textContent = counter+' characters left';
}

var el = document.getElementById('text');
el.addEventListener('keyup',charCount,false);

