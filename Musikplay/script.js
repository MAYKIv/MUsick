document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const coverImage = document.getElementById('coverImage');
    const playlist = document.getElementById('playlist');

    playlist.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const audioSource = event.target.getAttribute('data-src');
            const imgSource = event.target.getAttribute('data-img');

            audioPlayer.src = audioSource;
            coverImage.src = imgSource;

            audioPlayer.play();
        }
    });
});
