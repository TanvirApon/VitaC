console.log("Js File has been added");

var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var quantity = document.getElementById('quantity');

var wishList = document.getElementById("wishlist-icon");

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

// WhishLiast button work
wishList.addEventListener('click',function(){
  if(wishList.style.color === ""){
    wishList.style.color = "black";
  }
  else{
    wishList.style.color = "";
  }
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


function select(element){
  var img = element.querySelector("img");
  img.style.border="1px solid black";
}

