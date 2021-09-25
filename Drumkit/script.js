
// understanding the concepts of eventListners... It needs two arguments -- first one is the operation by which we want to trigger this listener
// and the second one will be the funtion which we need to be performed once the funtiion is triggered.. 


// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello");
// });

// document.querySelector("button").addEventListener("click", handleClick);
//we did not write handleClick() but instead wrote handleClick inside the event listener because if we write handleClick() then that will be straight
//away a finction call but we want to call the function once it is triggered.....

function handleClick(){
alert("Hi I got clicked!");
}

var drums = document.querySelectorAll(".drum");
var totalDrums = drums.length;

// function Drum(currDrum, drumSound){
//     this.currDrum = currDrum;
//     this.drumSound = drumSound;
// }

// var drum1 = new Drum(w, "sounds/tom-1.mp3");
// var drum2 = new Drum(a, "sounds/tom-2.mp3");
// var drum3 = new Drum(s, "sounds/tom-3.mp3");
// var drum4 = new Drum(d, "sounds/tom-4.mp3");
// var drum5 = new Drum(j, "sounds/crash.mp3");
// var drum6 = new Drum(k, "sounds/kick-bass.mp3");
// var drum7 = new Drum(l, "sounds/snare.mp3");

var drumObject = {w : "sounds/tom-1.mp3", a: "sounds/tom-2.mp3",
s: "sounds/tom-3.mp3", d: "sounds/tom-4.mp3",j: "sounds/crash.mp3",
k: "sounds/kick-bass.mp3", l: "sounds/snare.mp3"};

// var arr = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", 
// "sounds/tom-3.mp3","sounds/tom-4.mp3", "sounds/crash.mp3"
// , "sounds/kick-bass.mp3", "sounds/snare.mp3"]

for(var i = 0; i< totalDrums; i++){

    drums[i].addEventListener("keypress", function(event){

        // console.log(this.innerHTML);
        // var currDrum = this.innerHTML;
        // var audio = new Audio(drumObject.currDrum);
        // audio.play();
    
        // var currDrum = this.innerHTML;
        var currDrum = event.key;
        buttonAnimation(currDrum); 
    
        switch(currDrum){
    
            case "w" : var audio = new Audio("sounds/tom-1.mp3");
                       audio.play();
                       break;
    
            case "a" : var audio = new Audio("sounds/tom-2.mp3");
                       audio.play();
                       break;
    
            case "s" : var audio = new Audio("sounds/tom-3.mp3");
                       audio.play();
                       break;
                       
            case "d" : var audio = new Audio("sounds/tom-4.mp3");
                       audio.play();
                       break;
    
            case "j" : var audio = new Audio("sounds/crash.mp3");
                       audio.play();
                       break;
    
            case "k" : var audio = new Audio("sounds/kick-bass.mp3");
                       audio.play();
                       break;
    
            case "l" : var audio = new Audio("sounds/snare.mp3");
                       audio.play();
                       break;
    
            default: break;
            
        }
    
    });

    drums[i].addEventListener("click", function(){

        // console.log(this.innerHTML);
        // var currDrum = this.innerHTML;
        // var audio = new Audio(drumObject.currDrum);
        // audio.play();

        var currDrum = this.innerHTML;

        buttonAnimation(currDrum);

        switch(currDrum){

            case "w" : var audio = new Audio("sounds/tom-1.mp3");
                       audio.play();
                       break;

            case "a" : var audio = new Audio("sounds/tom-2.mp3");
                       audio.play();
                       break;

            case "s" : var audio = new Audio("sounds/tom-3.mp3");
                       audio.play();
                       break;
                       
            case "d" : var audio = new Audio("sounds/tom-4.mp3");
                       audio.play();
                       break;

            case "j" : var audio = new Audio("sounds/crash.mp3");
                       audio.play();
                       break;

            case "k" : var audio = new Audio("sounds/kick-bass.mp3");
                       audio.play();
                       break;

            case "l" : var audio = new Audio("sounds/snare.mp3");
                       audio.play();
                       break;

            default: break;
            
        }

    });

    

    
    function buttonAnimation(currentKey){
        
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 200);
    }

}



