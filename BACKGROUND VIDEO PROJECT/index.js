const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
/* in oder to toggle the play and pause icons */
const fa = document.querySelector(".fa-play");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
    if (video.paused) {
        // If paused, play video//
        video.play();
        // Remove the play-btn, add the pause-btn//
        fa.classList.remove("fa-play");
        fa.classList.add("fa-pause");
       
    } else {
        // If playing, pause the video//
        video.pause();
        // Remove the pause-btn, add the play-btn //
        fa.classList.add("fa-play");
        fa.classList.remove("fa-pause");

    }
})
// Brings the preloader behind the website after it loads completely //
window.addEventListener("load", () =>{
    preloader.style.zIndex = "-2";
});

// btn.addEventListener("click", ()=>{
//     /* if the button has a class of pause, remove it and play the video*/
//     if (btn.classList.contains("pause")){
//         btn.classList.remove("pause");
//         video.play();
//         fa.classList.add("fa-pause");
//         fa.classList.remove("fa-play");
//         /* if it has a class of play, remove it, add pause and stop the video */
//     } else{
//         btn.classList.add("pause");
//         video.pause();
//         fa.classList.add("fa-play");
//         fa.classList.remove("fa-pause");
//     }
// })