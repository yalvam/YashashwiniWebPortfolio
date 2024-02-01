let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Slide show function 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//const canvas = document.getElementById("canvas");
//const ctx = canvas.getContext("2d");
//getting element
const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      //setting default color
      const defaultColor = '#ff0000';
      let selectedColor = defaultColor;
      
  
      
      //function to choose a color
      function changeColor() {
          const colorPicker = document.getElementById('colorPicker');
          selectedColor = colorPicker.value;
          drawRectangle();
      }
      //function tochange increase of decrease the size of rectangle
      function changeSize() {
          const sizeSlider = document.getElementById('sizeSlider');
          canvas.width = sizeSlider.value;
          canvas.height = sizeSlider.value;
          drawRectangle();
      }
      
      //function to to draw rectangle
      function drawRectangle() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = selectedColor;
          ctx.fillRect(10, 10, canvas.width - 100, canvas.height - 100);
      }
      
      
      // Initial drawing
      drawRectangle();






// form vaditation funtion
function validateForm(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    //checking if its empty
    if (firstName.trim() === '' || lastName.trim() === '' || gender === '' || dob.trim() === '' || email.trim() === ''|| message.trim() === '') {
        alert("All fields are required");
    } else {
        var successMessage = document.getElementById("success-message");
        successMessage.innerHTML = "Hello " + firstName + " " + lastName + "! Your message is submitted";
    }

}


