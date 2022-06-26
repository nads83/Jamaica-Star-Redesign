

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click',function(){
    if(btnHam.className !== "") 
    {
        btnHam.style.display = "none";

        btnTimes.style.display = "block";

        navBar.classList.add("show-nav")
    } 
});

btnTimes.addEventListener('click', function(){
    if(btnHam.className !=="")
    {
        this.style.display = "none";
        btnHam.style.display = "block";

        navBar.classList.remove("show-nav");

    }
});


// Video Section
let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
    vid.onclick = () =>{
       let src = vid.querySelector('.list-video').src;
       let title = vid.querySelector('.list-title').innerHTML;
       document.querySelector('.main-video-container .sub-video-container .main-video').src = src;
       document.querySelector('.main-video-container .sub-video-container .main-video').play();
       document.querySelector('.main-video-container .sub-video-container .main-vid-title').innerHTML = title;
    };
});


