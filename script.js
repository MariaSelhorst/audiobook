const playBtn = document.querySelector("#play-pause")
const chapter = document.querySelector("#capitulo")

const after = document.querySelector("#anterior")
const before = document.querySelector("#proximo")

let currentTrack = 1;
const audio = new Audio(`./books/dom-casmurro/${currentTrack}.mp3`)

after.addEventListener("click", () => {
    if(currentTrack == 1){
        currentTrack = 10;
    }
    else{
        currentTrack--;
    }
    updateSong()
})
before.addEventListener("click", () => {
    if(currentTrack == 10){
        currentTrack = 1;
    }
    else{
        currentTrack++;
    }
    updateSong()
})



playBtn.addEventListener("click", (event) => {
    if(audio.paused){
        audio.play();
        playBtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill")
    }
    else{
        audio.pause();
        playBtn.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill")
    }
})


function updateSong() {
    audio.src = `./books/dom-casmurro/${currentTrack}.mp3`
    chapter.innerHTML = `Capítulo ${currentTrack}`

    audio.play()
}