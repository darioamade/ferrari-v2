
const videosChange = document.querySelector("#videosChange");
const gt1 = document.querySelector("#gt1");
const gt2 = document.querySelector("#gt2");
const gt3 = document.querySelector("#gt3");
const gt4 = document.querySelector("#gt4");
const gt5 = document.querySelector("#gt5");
const gt6 = document.querySelector("#gt6");
const gt7 = document.querySelector("#gt7");
const gt8 = document.querySelector("#gt8");
// Player
const player = document.querySelector(".player");
const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.querySelector("#play-btn");
const volumeIcon = document.querySelector("#volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");
const btnInpicture = document.querySelector(".fa-ellipsis-v");

let lastVolume = 1;

function changeVolume(e) {
  let volume = e.offsetX / volumeRange.offsetWidth;

  if (volume < 0.1) {
    volume = 0;
  }
  if (volume > 0.9) {
    volume = 1;
  }
  volumeBar.style.width = ` ${volume * 100}%`;
  video.volume = volume;

  volumeIcon.className = ""; // no icon
  if (volume > 0.7) {
    volumeIcon.classList.add("fas", "fa-volume-up");
  } else if (volume < 0.7 && volume > 0) {
    volumeIcon.classList.add("fas", "fa-volume-down");
  } else if (volume === 0) {
    volumeIcon.classList.add("fas", "fa-volume-off");
  }
  lastVolume = volume;
}

function toggleMute() {
  volumeIcon.className = "";
  if (video.volume) {
    lastVolume = video.volume;
    video.volume = 0;
    volumeBar.style.width = 0;
    volumeIcon.classList.add("fas", "fa-volume-mute");
    volumeIcon.setAttribute("title", "Unmute");
  } else {
    video.volume = lastVolume;
    volumeBar.style.width = `${lastVolume * 100}%`;
    volumeIcon.classList.add("fas", "fa-volume-up");
    volumeIcon.setAttribute("title", "Mute");
  }
}

function calcDisplayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;

  return ` ${minutes}:${seconds}`;
}

function updateProgress() {
  //console.log('currentTime', video.currentTime, 'duartion', video.duration);
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = `${calcDisplayTime(video.currentTime)} / `;
  duration.textContent = `${calcDisplayTime(video.duration)}  `;
}
function showPlayIcon() {
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
}

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
  } else {
    video.pause();
    showPlayIcon();
  }
}

// View in fullscreen
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE11
    elem.msRequestFullscreen();
  }
  video.classList.add("video-fullscreen");
}

// Close fullscreen
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE11
    document.msExitFullscreen();
  }
  video.classList.remove("video-fullscreen");
}

let fullscreen = false;

function toggleFullscreen() {
  if (!fullscreen) {
    openFullscreen(player);
  } else {
    closeFullscreen();
  }
  fullscreen = !fullscreen;
}

// playBtn.addEventListener('click', togglePlay);
// video.addEventListener('click', togglePlay);
video.addEventListener("ended", showPlayIcon);

video.addEventListener("timeupdate", updateProgress);
video.addEventListener("canplay", updateProgress);
volumeRange.addEventListener("click", changeVolume);
volumeIcon.addEventListener("click", toggleMute);
fullscreenBtn.addEventListener("click", toggleFullscreen);

// const gt1 = document.querySelector("#gt1");
// gt1.addEventListener("mouseover", function () {
//     console.log('jkalhgsjof');
//   document.getElementById("gt11").src.textContent = "/css/img/model.mp4";
// });





gt1.addEventListener("mouseover", function () {
  videosChange.innerHTML = `  <div class="video-container" id="videosChange">
                                <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >
                                <!-- <video autoplay loop="true" autoplay muted loop> -->
                                        <source type="video/mp4" src="/css/img/engine.mp4">
                                </video>
                                <div class="silver-txt">
                                    <p>812  <span class="redColor">Superfast</span></p>
                                       
                                </div>
              
                                <div class="show-controls">
                                <div class="controls-container">
                                    <div class="progress-range" title="Seek">
                                    <div class="progress-bar"></div>
                                    </div>
                                    <div class="control-group">
                                    <div class="controls-left">
                                        <div class="play-controls">
                                        <i class="fas fa-play" title="Play" id="play-btn"></i>
                                        </div>
                                        <div class="time">
                                        <span class="time-elapsed">00:00 / </span>
                                        <span class="time-duration">02:49</span>
                                        </div>
                                    </div>
                                    <div class="controls-right">
                                        <div class="volume">
                                        <div class="volume-icon">
                                            <i class="fas fa-volume-up" title="Mute" id="volume-icon"></i>
                                        </div>
                                        <div class="volume-range" title="Change Volume">
                                            <div class="volume-bar"></div>
                                        </div>
                                        </div>
                                        <!-- <div class="volume"><div class="volume-icon"><i class="fas fa-volume-up" title="Mute" id="volume-icon"></i></div></div> -->
                                        <div class="fullscreen">
                                        <i class="fas fa-expand"></i>
                                        </div>
                                        <div class="fullscreen">
                                        <i class="fas fa-ellipsis-v"></i>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;
});
gt2.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/1.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p>812  <span class="redColor">GTS</span></p>
                                       
                                </div>`;
});

gt3.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/2.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p>SF90  <span class="redColor"> Stradale</span></p>
                                       
                                </div>`;
});



gt4.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/3.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p>SF90  <span class="redColor"> Spider</span></p>
                                       
                                </div>`;
});
gt5.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/4.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p>F8 <span class="redColor">Tributo</span></p>
                                       
                                </div>`;
});

gt6.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/5.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p>F8 <span class="redColor">Spider</span></p>
                                       
                                </div>`;
});

gt7.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/2.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p><span class="redColor">Ferrari Roma</span></p>
                                       
                                </div>`;
});

gt8.addEventListener("mouseover", function () {
  videosChange.innerHTML = ` <video  playsinline autoplay loop muted style="min-width:100%; min-height:100%;" >

                                <source type="video/mp4" src="/css/img/1.mp4">
                 
                             </video>
                               <div class="silver-txt">
                                    <p><span class="redColor">Ferrari Portofino M</span></p>
                                       
                                </div>`;
});
