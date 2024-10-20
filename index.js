console.log("Js File has been added");

var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var quantity = document.getElementById('quantity');
var wishList = document.querySelector("#wishlist_icon i");
var icon = document.querySelector(".form-select");

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
  wishList.classList.toggle('black-color');
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

function selectFlavour(element){
  var imagesAll = document.querySelectorAll(".flavour img");
  for (var i = 0; i < imagesAll.length; i++) {
    imagesAll[i].style.border = "none"; 
    imagesAll[i].style.background = "none"; 
  }
   var image = element.querySelector("img");
   image.style.border = "2px solid black";
   image.style.background = "#c0c2c4";

   var flavour = image.className; 
   var flavourHeading = document.querySelector('.head'); 
   flavourHeading.textContent = flavour;
}

function selectImage(element){
  var imagesAll = document.querySelectorAll(".selected img");
  for (var i = 0; i < imagesAll.length; i++) {
    imagesAll[i].style.border = "none"; 
    imagesAll[i].style.background = "none"; 
  }
   var image = element.querySelector("img");
   image.style.border = "2px solid black";
   image.style.background = "#c0c2c4";

   var selectImage = document.querySelector("#image-select");
   selectImage.src = image.src;
}

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

icon.addEventListener('click', () => {
  var downArrow = document.querySelector('.down-arrow');
  var upArrow = document.querySelector('.up-arrow');
  if (downArrow.style.display !== 'none') {
    downArrow.style.display = 'none';  
    upArrow.style.display = 'inline'; 
  } else {
    upArrow.style.display = 'none';  
    downArrow.style.display = 'inline'; 
  } 
});