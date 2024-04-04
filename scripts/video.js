const video = document.getElementById('myVideo');
const playBtn = document.getElementById('play');
const muteBtn = document.getElementById('mute');
const playList = ['cakes1','cakes2','cakes3' ];
const playTitle = ['как дикорировать торты','наши самые красивые торты','как делть торты'];
const playText = ['как красиво дикарироют','очень красиво','легко и просто'];
const videoTitle = document.querySelector('.video_title');
const videoText = document.querySelector('.video_text');
const prevBtn = document.getElementById('prev');
//let food = ['potato','chicken','rice'];
//alert(food[0])//




let number = 0;

let a = 100; 

let l = [9,7,6,5];

console.log(l[3]);

function play()
{   
    if (video.paused == true) {
        video.play();
        playBtn.innerHTML = 'pause';
    }
    else
    {
      video.pause();
      playBtn.innerHTML = 'play'
    }
    
}
function mute()
{   
    if (video.mute == true) {
        video.mute = false
        muteBtn.innerHTML = 'mute';
    }
    else
    {
      video.mute = true;
      muteBtn.innerHTML = 'unmute';
    }
    
}
function next()
{
  if( number < playList.length - 1 )
  {
    number++;
  }
 else
 {
  number = 0;
 }


video.src = `video/${playList[number]}.mp4`;
videoTitle.innerHTML = playTitle[number];
videoText.innerHTML = playText[number];


}
function previous()
{
  if( number  != 0)
  {
    number--;
  }
 else
 {
  number = playList.length-1;
 }


video.src = `video/${playList[number]}.mp4`;
videoTitle.innerHTML = playTitle[number];
videoText.innerHTML = playText[number];


}













































