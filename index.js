//1st button - option 1
//document.querySelector("button").addEventListener("click", handleClick); //document.quesrySelector("button") = first button

// //2nd button - option 1
// document.querySelector("button").addEventListener("click", function (){
//   alert("I got clicked");
// });


// function handleClick(){
//   alert("I got clicked");
// }

// function handleClick(){
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }

function playDrumAudio(key){
  switch (key) {
    case "w":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:console.log(buttonInnerHTML)

  }
}

//for all button
for (var i=0 ; i<document.querySelectorAll("button.drum").length; i++){
  document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
    //this = <button class="w drum">w</button>  --> this.innerHTML=w
    var buttonInnerHTML = this.innerHTML;
    playDrumAudio(buttonInnerHTML);
    addMarkOnceClick(buttonInnerHTML);
  });
}

//for all keyboard
document.addEventListener("keydown",function(event){
  playDrumAudio(event.key);
  addMarkOnceClick(event.key);
});


function addMarkOnceClick(key){
  var activButton = document.querySelector("." + key);
  console.log(activButton);

activButton.classList.add("pressed");
setTimeout(function(){
  activButton.classList.remove("pressed");
}, 250);
};
