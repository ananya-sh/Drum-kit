function drumKey (key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            return audio.play();
            
        
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            return audio.play();
            

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            return audio.play();
            

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            return audio.play();
            

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            return audio.play();
            

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            return audio.play();
            

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            return audio.play();
            

        default:
            // do nothing
            break;
    }
}

//screen click
var click = document.querySelectorAll(".drum");
var n=click.length;
for(var i = 0; i<n;i++){
    click[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        drumKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// button click through keyboard
document.addEventListener("keydown",function(event){
    drumKey(event.key);
    buttonAnimation(event.key);
})

// animation function
function buttonAnimation(currentKey){
    var selectButton = document.querySelector("."+ currentKey);
    selectButton.classList.add("pressed");
    setTimeout(function(){selectButton.classList.remove("pressed")},100);
}


