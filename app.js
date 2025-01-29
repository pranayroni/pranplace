let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let layer = document.querySelectorAll(".layer");


window.addEventListener('resize', function() {
  let personalLogo = document.querySelectorAll('.personal__logo');
  
  let aboutMePicture = document.querySelector('.about-me__picture--mask');
  let aboutMePictureWidth = aboutMePicture.offsetWidth;
  if (window.innerWidth <= 350) {
  for(let i =0; i < personalLogo.length; i++){
    
      personalLogo[i].textContent = 'Pranay';
    } 
  }
  else {
    for(let i=0 ; i < personalLogo.length; i++){
      personalLogo[i].textContent = 'pran.place'; // replace with the original content
    }
  }

  if (this.window.innerWidth < aboutMePictureWidth) {
    let scale = window.innerWidth / aboutMePictureWidth;
    aboutMePicture.style.transform = `scale(${scale})`;
  } else {
    aboutMePicture.style.transform = `scale(1)`;
  }




});

// dark mode

var icon = document.getElementById("themebutton");
const footers = document.getElementsByClassName("footer__social--link");
let line2 = document.getElementById("line2")
let pfps = document.getElementsByClassName("about-me__picture--mask");
let projects = document.getElementsByClassName("project__wrapper");
icon.onclick = function(){
  document.body.classList.toggle("dark-mode");
  for(let i = 0; i < projects.length; i++){
    projects[i].classList.toggle("dark-mode-pfp-shadow");
  }
  for(let i = 0; i < pfps.length; i++){
    pfps[i].classList.toggle("dark-mode-pfp-shadow");
  }
  if(document.body.classList.contains("dark-mode")){
    line2.style.filter = "none"
    
    icon.src = "./assets/light.png";
    for(let i = 0; i < footers.length; i++){
      footers[i].classList.add("link__hover-effect--black");
      footers[i].classList.remove("link__hover-effect--white");
    }
} else{
  icon.src = "./assets/darkmode.png";
  line2.style.filter = "invert()"
  for(let i = 0; i < footers.length; i++){
    footers[i].classList.add("link__hover-effect--white");
    footers[i].classList.remove("link__hover-effect--black");
  }
}
}

const profilePic = document.querySelector('.about-me__picture--mask');

profilePic.addEventListener('mouseenter', (e) => {
    const rect = profilePic.getBoundingClientRect();
    
    // Remove all previous glow classes
    profilePic.classList.remove('glow-left', 'glow-right', 'glow-top', 'glow-bottom');
    
    // Calculate entry point
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate relative position (0 to 1)
    const relativeX = x / rect.width;
    const relativeY = y / rect.height;
    
    // Determine the closest edge
    const distToLeft = relativeX;
    const distToRight = 1 - relativeX;
    const distToTop = relativeY;
    const distToBottom = 1 - relativeY;
    
    // Find the minimum distance
    const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);
    
    // Apply the appropriate glow
    if (minDist === distToLeft) {
        profilePic.classList.add('glow-left');
    } else if (minDist === distToRight) {
        profilePic.classList.add('glow-right');
    } else if (minDist === distToTop) {
        profilePic.classList.add('glow-top');
    } else {
        profilePic.classList.add('glow-bottom');
    }
});

profilePic.addEventListener('mouseleave', () => {
    profilePic.classList.remove('glow-left', 'glow-right', 'glow-top', 'glow-bottom');
});

const personalLogo = document.querySelector('.personal__logo');

personalLogo.addEventListener('click', () => {
    personalLogo.classList.toggle('locked');
});
