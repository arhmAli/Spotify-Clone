let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif');
let songsItems=Array.from(document.getElementsByClassName('songItem'));
let songa=Array.from(document.getElementsByClassName('songItemPlay'));
let ff=document.getElementById('forward');
let back=document.getElementById('backward');
let songText=document.getElementById('songTitle');
let songs=[
    {songName:"Random-song-1",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Random-song-2",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Random-song-3",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Random-song-4",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Random-song-5",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Random-song-6",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Random-song-7",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Random-song-8",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Random-song-9",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Random-song-10",filePath:"songs/3.mp3",coverPath:"covers/10.jpg"},
    {songName:"Random-song-11",filePath:"songs/2.mp3",coverPath:"covers/1.jpg"},
]
songsItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
    gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
  
    songa.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
songa.forEach((element)=>{
  element.addEventListener('click',(e)=>{
if(audioElement.paused){
    makeAllPlays();
 songIndex= parseInt(e.target.id);
 element.classList.remove('fa-circle-play');
 element.classList.add('fa-circle-pause');
 audioElement.src=`songs/${songIndex+1}.mp3`;
 songTitle.innerText=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
}
else{
    audioElement.pause();
 element.classList.remove('fa-circle-pause');
 element.classList.add('fa-circle-play');
}

//if(audioElement.paused()){
    
//e.target.classList.remove('fa-circle-pause');
//e.target.classList.add('fa-circle-play');
//audioElement.play()
//}
//else{
 //   e.target.classList.remove('fa-circle-play');
  //  e.target.classList.add('fa-circle-pause');
  //  audioElement.play();
//}
    })
})

ff.addEventListener('click',()=>{
    if(songIndex>9){
    songIndex=0;
    }
    else{
        songIndex+=1;
    }
        
    audioElement.src=`songs/${songIndex+1}.mp3`;
    
songTitle.innerText=songs[songIndex-1].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
})
back.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
        }
        else{
            songIndex-=1;
        }
        
        audioElement.src=`songs/${songIndex+1}.mp3`;
        
songTitle.innerText=songs[songIndex-1].songName;
        
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause'); 
})


