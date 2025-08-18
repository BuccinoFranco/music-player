const songTitle = document.querySelector('.play h1');
const songArtist = document.querySelector('.player p');
const songPlay = document.querySelector('#song-play');
const progressBar = document.querySelector('#progress-bar');
const btnRewind = document.querySelector('.btn-rewind');
const btnPlayPause = document.querySelector('.btn-play-pause');
const btnForward = document.querySelector('.btn-forward');
/*
LISTADO DE CANCIONES
*/ 

const songs = [
    {
        title: 'Break Stuff',
        artist: 'Limp Bizkit',
        src: './music/Limp Bizkit - Break Stuff.mp3',
    },
    {
        title: 'Given Up',
        artist: 'Linkin park',
        src: './music/Linkin park - Given Up.mp3',
    },
    {
        title: 'Enter Sandman (Remastered)',
        artist: 'Metallica',
        src: './music/Metallica - Enter Sandman (Remastered).mp3',
    },
    {
        title: "Fuel (HD)",
        artist: "Metallica",
        src: "./music/Metallica - Fuel (HD).mp3",
    },
]

//INDEX QUE UTILIZAMOS PARA SABER CUAL CANCIÓN ES LA QUE SE ESTA REPRODUCIENDO.

let songIndex = 0

//FUNCIÓN PARA CARGAR LOS METADATOS DE UNA CANCIÓN.

const loadSong = () => {
    songTitle.textContent = songs[songIndex].title
    songArtist.textContent = songs[songIndex].artist
    songPlay.src = songs[songIndex].src
    songPlay.addEventListener('loadeddata', function(){})
}


btnPlayPause.addEventListener("click", () => {
    if (songPlay.paused){
        playSong()
    } else {
        pauseSong()
    }
})

const playSong = () => {
    songPlay.play()
    btnPlayPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
}

const pauseSong = () => {
    songPlay.pause()
    btnPlayPause.innerHTML = '<i class="bi bi-play-fill"></i>';
}  

//ME PERMITE SETIAR LOS VALORES PARA LA BARRA DE PROGRESO.

songPlay.addEventListener('loadedmetadata', () =>{
    progressBar.max = playSong.duration
    progressBar.value = playSong.currentTime
})

//FUNCIONES PARA ACTUALIZAR LA BARRA DE PROGRESO

progressBar.addEventListener('timeupdate', () => {
    progressBar.value = (songPlay.currentTime / songPlay.duration) * 100 
})

progressBar.addEventListener("input", () => {
    songPlay.value = progressBar.value
})

progressBar.addEventListener ("change", () => {
    playSong()
})

btnRewind.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex)
    playSong()
})

btnForward.addEventListener("click", () => {
    songIndex = (songIndex + 1 + songs.length) % songs.length;
    loadSong(songIndex)
    playSong()
})

loadSong(songIndex);

document.addEventListener("onload", ()=> {
    loadSong(songIndex)
})

