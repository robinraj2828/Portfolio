// html progress circular bar 
let htmlProgress = document.querySelector(".html"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// css progress circular bar 
let cssProgress = document.querySelector(".css"),
  cssValue = document.querySelector(".css-progress");

let cssStartValue = 0,
  cssEndValue = 80,
  cssspeed = 30;

let progresscss = setInterval(() => {
  cssStartValue++;

  cssValue.textContent = `${cssStartValue}%`;
  cssProgress.style.background = `conic-gradient(#7d2ae8 ${
    cssStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (cssStartValue == cssEndValue) {
    clearInterval(progresscss);
  }
}, cssspeed);

// javascript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 70,
  javascriptspeed = 30;

let progressjavascript = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#20c997 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjavascript);
  }
}, javascriptspeed);

// bootstrap progress circular bar 
let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 30,
  bootstrapspeed = 30;

let progressbootstrap = setInterval(() => {
  bootstrapStartValue++;

  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#3f396d ${
    bootstrapStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (bootstrapStartValue == bootstrapEndValue) {
    clearInterval(progressbootstrap);
  }
}, bootstrapspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});