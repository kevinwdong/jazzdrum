
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML
        drumSounds(buttonInnerHTML);
     });
}


document.addEventListener("keypress", function(event) {
    drumSounds(event.key);
});


function drumSounds(key) {
    switch(key) {
            
        case "A":
            let tom1 = new Audio("drumSounds/tom-1.mp3");
            tom1.play();
        break;

        case "D":
            let tom2 = new Audio("drumSounds/tom-2.mp3");
            tom2.play();
        break;

        case "J":
            let tom3 = new Audio("drumSounds/tom-3.mp3");
            tom3.play();
        break;

        case "L":
            let tom4 = new Audio("drumSounds/tom-4.mp3");
            tom4.play();
        break;

        case "S":
            let snare1 = new Audio("drumSounds/snare.mp3");
            snare1.play();
        break;

        case "K":
            let snare2 = new Audio("drumSounds/snare.mp3");
            snare2.play();
        break;

        case "W":
            let crash1 = new Audio("drumSounds/crash.mp3");
            crash1.play();
        break;

        case "I":
            let crash2 = new Audio("drumSounds/crash.mp3");
            crash2.play();
        break;

        case "SPACE":
            let kickBass1 = new Audio("drumSounds/kick-bass.mp3");
            kickBass1.play();
        break;

        case " ":
            let kickBass2 = new Audio("drumSounds/kick-bass.mp3");
            kickBass2.play();
        break;

    default: console.log(buttonInnerHTML);
    }
}