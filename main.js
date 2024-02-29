//Make Top Bar opaque after scrolling
document.addEventListener('scroll', () => {
  const headder = document.querySelector('.mainh');
  const scrollh = 150;
  if (window.scrollY > scrollh) {
    headder.classList.add('scrolled');
  } else {
    headder.classList.remove('scrolled');
  }
});


//Make Take to Top button visible after scrolling
document.addEventListener('scroll', () => {
  const headdder = document.querySelector('.take-top');
  const scrollhh = 200;
  if (window.scrollY > scrollhh) {
    headdder.classList.add('scrolledd');
  } else {
    headdder.classList.remove('scrolledd');
  }
});


//Make Hamburger Menu visible after clicking the icon
function menuClick() {
  var x = document.getElementById("hamburger");
  var y = document.getElementById("hamburgerShade");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}


//Darkmode Toggle in Desktop site
const checkBox = document.getElementById("checkbox");
checkBox.addEventListener("change", () => {
  document.body.classList.toggle("darkMode");
})


//Darkmode Toggle in Hamburger Menu
const checkBox1 = document.getElementById("checkbox1");
checkBox1.addEventListener("change", () => {
  document.body.classList.toggle("darkMode");
})


//Form Validation
function validateForm() {
  var input = document.getElementById("textarea").value;
  var errorMessage = document.getElementById("errorMessage");

  if (input.length <= 10) {
    errorMessage.textContent = "Enter more than 10 characters!";
    return false; // Prevent form submission
  } else {
    errorMessage.textContent = ""; // Clear error message
    return true; // Allow form submission
  }
}