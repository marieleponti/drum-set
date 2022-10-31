var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++){

    drumButtons[i].addEventListener("keypressed", function() {
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function(event){
    keyPressed(event.key);
    buttonAnimation(event.key);
});

function keyPressed(keyPressed){
    switch (keyPressed) {
        case 'w':
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
        case 'a':
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
        case 's':
            var audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
        case 'd':
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
        case 'j':
            var audio5 = new Audio('sounds/kick-bass.mp3');
            audio5.play();
        case 'k':
            var audio6 = new Audio('sounds/snare.mp3');
            audio6.play();
        case 'l':
            var audio7 = new Audio('sounds/crash.mp3');
            audio7.play();
    }
}

function buttonAnimation(keyPressed){
    var activeKey = document.querySelector("." + keyPressed);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100)
}

