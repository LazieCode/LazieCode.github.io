var navMenuAchorTags = document.querySelectorAll(".overlay a");
console.log(navMenuAchorTags);

var interval;

for(var i = 0; i< navMenuAchorTags.length; i++){
    navMenuAchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection); 
        
        interval = setInterval(scrollVertically,20, targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    console.log(targetSectionCoordinates);
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}