let audioElement = new Audio('gs.mp3');
// audioElement.play();

let playButton =document.getElementById("play");



playButton.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playButton.classList.toggle('fa-solid fa-play');
        playButton.classList.toggle('fa-solid fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
       playButton.classList.toggle('"fa-solid fa-circle-pause"');
        playButton.classList.toggle('fa-solid fa-play');
        gif.style.opacity = 0;
    }
})