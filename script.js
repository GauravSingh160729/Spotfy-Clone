let audioElement = new Audio('gs.mp3');
// audioElement.play();

let playButton =document.getElementById("#play");


playButton.addEventListener= ('click' ,()=>{
if(audioElement.paused){
    audioElement.play();
}
})
