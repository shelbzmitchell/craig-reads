// Wait for document to load
$(document).ready(() => {
    $('form').on('submit', () => {

        // prevents default behaviour
        // Prevents event propagation
        return false;
    });
});

// var myVideo = document.getElementById('background-video');
// if (typeof myVideo.loop == 'boolean') { // loop supported
//     myVideo.loop = true;
// } else { // loop property not supported
//     myVideo.on('ended', function () {
//     this.currentTime = 0;
//     this.play();
//     }, false);
// }
// myVideo.play();