const songTitle = document.querySelector('.play h1');
const songArtist = document.querySelector('.player p');
const songPlay = document.querySelector('#song-play');
const progressBar = document.querySelector('#progress-bar');
const btnRewind = document.querySelector('.btn-rewind');
const btnPlayPause = document.querySelector('.btn-play-pause');
const btnForward = document.querySelector('.btn-forward');

const songs = [
    {
        title: "",
        artist: "",
        src: "",
    }
]

btnPlayPause.addEventListener("click", () => {
    if (songPlay.paused){
        playSong()
    } else {
        pauseSong()
    }
})

const playSong = () => {
    songPlay.play()
    btnPlayPause.innerHTML = '<i class="bi bi-play-fill"></i>';
}

const pauseSong = () => {
    songPlay.pause()
    btnPlayPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
}  