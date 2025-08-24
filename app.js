const songTitle = document.querySelector('.player h1');
const songArtist = document.querySelector('.player p');
const songPlaying = document.querySelector('#song-play');
const progressBar = document.querySelector('#progress-bar');
const btnRewind = document.querySelector('.btn-rewind');
const btnPlayPause = document.querySelector('.btn-play-pause');
const btnForward = document.querySelector('.btn-forward');
const volumen = document.querySelector('#volumen');

/*
LISTADO DE CANCIONES
*/ 

const songs = [
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
    songPlaying.src = songs[songIndex].src
}


btnPlayPause.addEventListener("click", () => {
    if (songPlaying.paused){
        playSong();
    } else {
        pauseSong();
    }
})

const playSong = () => {
    songPlaying.play()
    btnPlayPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
}

const pauseSong = () => {
    songPlaying.pause()
    btnPlayPause.innerHTML = '<i class="bi bi-play-fill"></i>';
}  

//ME PERMITE SETIAR LOS VALORES PARA LA BARRA DE PROGRESO.

songPlaying.addEventListener('loadedmetadata', () =>{
    progressBar.max = songPlaying.duration
    progressBar.value = songPlaying.currentTime
})

//FUNCIONES PARA ACTUALIZAR LA BARRA DE PROGRESO

songPlaying.addEventListener('timeupdate', () => {
    if(!songPlaying.paused) {
        progressBar.value = songPlaying.currentTime
    }
})

progressBar.addEventListener("input", () => {
    songPlaying.currentTime = progressBar.value;
    });


volumen.addEventListener("input", () => {
    songPlaying.volume = volumen.value;
})    

btnRewind.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong();
    playSong();
})

btnForward.addEventListener("click", () => {
    songIndex = (songIndex + 1 + songs.length) % songs.length;
    loadSong();
    playSong();
    });

document.addEventListener("onload", ()=> {
    loadSong()
})

loadSong()