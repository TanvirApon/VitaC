var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var quantity = document.getElementById('quantity');
var wishList = document.querySelector("#wishlist_icon i");
var icon = document.querySelector(".form-select");
var downArrow = document.querySelector('.down-arrow');
var upArrow = document.querySelector('.up-arrow');
var leftSide = document.getElementById("left-side");
var rightSide = document.getElementById("right-side");

// increase button
increase.addEventListener('click',function(){
  var currQuan = parseInt(quantity.innerHTML)
  quantity.innerHTML = currQuan + 1;
});

// decrease button
decrease.addEventListener('click',function(){
  var currQuan = parseInt(quantity.innerHTML);
   if(currQuan <=0){
    currQuan = 0;
   }
   else
   {
    quantity.innerHTML = currQuan - 1;
   }
});

// WhishList button work
wishList.addEventListener('click',function(){
  wishList.classList.toggle('red-color');
});

// readmore on click option
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// select Flavour function
function selectFlavour(element){
  var allFlavours = document.querySelectorAll(".flavour");
  for (var i = 0; i < allFlavours.length; i++) {
    allFlavours[i].style.border = "none"; 
    allFlavours[i].style.background = "none"; 
    element.style.borderRadius = "0px";
  }
   element.style.border = "1px solid green ";
   element.style.backgroundColor = "red";
   element.style.borderRadius = "10px";

   var image = element.querySelector("img");
  var flavour = image.alt; 
  var flavourHeading = document.querySelector('.flavour_head');
  flavourHeading.textContent = flavour;
}

// select Image function
function selectImage(element){
  var cards = document.querySelectorAll(".selected");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.border = "none"; 
    cards[i].style.background = "none"; 
  }
  element.style.border = "1px solid green";
  element.style.background = "#808284";
  element.style.borderRadius = "10px";

  var img = element.querySelector("img");
  var selectImage = document.querySelector("#image-select");
  selectImage.src = img.src;

}

// Accordion function
function accordion(element) {
  var plus = element.querySelector('.add'); 
  var minus = element.querySelector('.remove');

  if (plus.style.display === 'none') {
      plus.style.display = 'inline';    
      minus.style.display = 'none';     
  } else {
      plus.style.display = 'none';     
      minus.style.display = 'inline';  
  }
}

//icon function 
function toggleDropdown() {
  if (downArrow.style.display !== 'none') {
    downArrow.style.display = 'none';
    upArrow.style.display = 'inline';
  } else {
    upArrow.style.display = 'none';
    downArrow.style.display = 'inline';
  }
}
icon.addEventListener('click', toggleDropdown);
downArrow.addEventListener('click', toggleDropdown);
upArrow.addEventListener('click', toggleDropdown);


//sub-image change
var slideIndex = 1;
showImage(slideIndex);

function plusImage(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
  var image = document.getElementsByClassName("image-container");
  var leftButton = document.getElementById("left-side");
  var rightButton = document.getElementById("right-side");

  if (n > image.length) { 
    slideIndex = image.length;
  }
  
  if (n < 1) {
    slideIndex = 1;
  }
  
  for (let i = 0; i < image.length; i++) {
    image[i].classList.add("d-none");
  }
  image[slideIndex - 1].classList.remove("d-none");

  if(slideIndex === 1){
    leftButton.style.visibility = "hidden";
    rightButton.style.visibility = "visible";
  }
  else if (slideIndex === image.length){
    leftButton.style.visibility = "visible";
    rightButton.style.visibility = "hidden";
  }
  else{
    leftButton.style.visibility = "visible";
    rightButton.style.display = "inline";
  }
}

//left-side button
leftSide.addEventListener("click", function() {
  plusImage(-1);
});

//right-side button
rightSide.addEventListener("click", function() {
  plusImage(1);
});





