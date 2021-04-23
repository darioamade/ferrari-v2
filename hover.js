
const raceContainer = document.querySelector(".menu-auto-right-race");
const Formula1 = document.querySelector("#Formula1-1");
const Formula2 = document.querySelector("#Formula1-2");
const Formula3 = document.querySelector("#Formula1-3");
const Formula4 = document.querySelector("#Formula1-4");
const Formula5 = document.querySelector("#Formula1-5");

Formula2.addEventListener("mouseover", function () {
  raceContainer.innerHTML = `
                    <ul class="nav-links-ferrari" style="background-image: url('/css/img/img-32.jpg');" >
                                <li><a href="auto.html" >HOME</a></li>
                                <li><a href="#" >Mission</a></li>
                                <li><a> Drivers</a></li>
                                 <li><a>Media Galleries</a></li>
                                <li><a>News</a></li>
                       </ul>

`;
});

Formula3.addEventListener("mouseover", function () {
  raceContainer.innerHTML = `
<ul class="nav-links-ferrari" style="background-image: url('/css/img/img-27.jpg');" >
                                <li><a href="auto.html" >HOME</a></li>
                                <li><a href="/race.html" >Ferrari Esports FDA Team</a></li>
                                <li><a> Ferrari Esports Series</a></li>
                            </ul>

`;
});
Formula4.addEventListener("mouseover", function () {
  raceContainer.innerHTML = `
<ul class="nav-links-ferrari" style="background-image: url('/css/img/img-30.jpg');" >
                                <li><a href="auto.html" >HOME</a></li>
                                <li><a href="#" >News</a></li>
                                <li><a> GT Series</a></li>
                                <li><a>Official Drivers</a></li>
                                <li><a>Cars</a></li>
                                <li><a>Club Competizioni GT</a></li>
                                <li><a>LMH</a></li>
                                <li><a>Media Galleries</a></li>
                                <li><a>Partners</a></li>
                            </ul>

`;
});
Formula5.addEventListener("mouseover", function () {
  raceContainer.innerHTML = `
                    <ul class="nav-links-ferrari" style="background-image: url('/css/img/50.jpg');" >
                                <li><a href="auto.html" >HOME</a></li>
                                <li><a href="#" >News</a></li>
                                <li><a href="#" >Calendar</a></li>
                                <li><a href="#" >Ferrari Challenge</a></li>
                                <li><a href="#" >XX Programme</a></li>
                                <li><a href="#" >F1 Clienti</a></li>
                                <li><a href="#" >Ferrari Challenge drivers</a></li>
                                <li><a href="#" >Corso Pilota</a></li>
                                <li><a href="#" >Cars</a></li>
                                <li><a href="#" >Live Streaming</a></li>
                                <li><a href="#" >Media Galleries</a></li>
                                <li><a href="#">Partners</a></li>
                            </ul>

`;
});

Formula1.addEventListener("mouseover", function () {
  raceContainer.innerHTML = `
              <ul class="nav-links-ferrari" style="background-image: url('/css/img/img-24.jpg');" >
                                <li><a href="auto.html" >HOME</a></li>
                                <li><a href="#" >SF21 Reveal</a></li>
                                <li><a> Team</a></li>
                                <li><a>News</a></li>
                                <li><a>Races</a></li>
                                <li><a>Partners</a></li>
                                <li><a>Hospitality</a></li>
                                <li><a>Media Galleries</a></li>
                                <li><a>History</a></li>
                                <li><a>Memorabilia trivia</a></li>
                            </ul>

`;
});

