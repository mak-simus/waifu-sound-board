
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   
      var buttonInnerHTML = this.innerHTML;
    
     makeSound(buttonInnerHTML);

     buttonAnimation(buttonInnerHTML);
    




} );

} 
document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key){
    
    switch (key) {
        case "1":
                var tom1 = new Audio("audio/uwu_girl.mp3");
                tom1.play();
                 break;
        case "2":
                 var tom2 = new Audio("audio/baaaka.mp3");
                 tom2.play();
                 break;
        case "3":
                var tom3 = new Audio("audio/akeno_ara_ara.mp3");
                tom3.play();
                break;
        case "4":
                var tom4 = new Audio("audio/zero_two_darling.mp3");
                tom4.play();
                break;
                    
        case "5":
               var crash = new Audio("audio/nagatoro_senpai.mp3");
             crash.play();
             break;
        case "6":
         var kickBass = new Audio("audio/Yuuta, Itai! (mp3cut.net).mp3");
         kickBass.play();
         break;
        case "7":
         var snare = new Audio("audio/Mochizou confess to Tamako!!(Movie) (mp3cut.net).mp3");
         snare.play();
         break;
                
                
    
           
            default: console.log(key);
                break;
           }
    

}
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

