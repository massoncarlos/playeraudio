
let audio = document.getElementById("audio");
var player = document.getElementById("audio"); 
let bar = document.getElementById("hp_range2");
let barVol = document.getElementById("hp_range3");
let timer = document.getElementById("timer");
let barVol2;
audio.volume = 1;
barVol.style.width = audio.volume * 100 + '%';

function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

function back(){
    audio.currentTime -= 15;
}

function foward(){
    audio.currentTime += 15;
}
function less(){
    if (audio.volume > 0.01)
        audio.volume -= 0.1;
    barVol2 = audio.volume * 100 + '%';
    barVol.style.width = barVol2;
}
function more(){
    if (audio.volume < 1)
        audio.volume += 0.1;
    barVol2 = audio.volume * 100 + '%';
    barVol.style.width = barVol2;
}

   
player.addEventListener("timeupdate", function() {
    var currentTime = player.currentTime;
    var duration = player.duration;
    let bar2 = (((currentTime +.25)/(duration*100))*10000)+'%'
    bar.style.width = bar2;
    if (Math.ceil(currentTime) < 60){
        if (Math.ceil(currentTime) > 9)
            timer.innerHTML = "00:" + Math.ceil(currentTime);
        else
            timer.innerHTML = "00:" + "0"+ Math.ceil(currentTime);
    }
    else{
        let min = Math.floor(Math.ceil(currentTime) / 60);
        let sec = Math.ceil(currentTime) % 60;
        {min < 10 ? min = "0" + min : min}
        {sec < 10 ? sec = "0" + sec : sec}
        timer.innerHTML = min +":" + sec;
    }
});