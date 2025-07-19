const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];

let index = 0; //help track the current video index
nextButton.addEventListener('click', function() {

    index += 1; //increment the index by 1
    video.src = movieList[index]; //update the video source

    if (index === 3){
        index = -1; //reset the index to 0 if it reaches the end of the list

    }
})
