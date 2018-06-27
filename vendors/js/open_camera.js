const open_camera = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) => {
            const video = document.getElementById('local_stream');
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
            };
        })
        .catch((err) => {
            /* handle the error */
        });
}
module.exports = open_camera;