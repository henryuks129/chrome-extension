console.log("running content script");



// last testrun

let recorder = null;
let chunks = [];
let isRecording = false;
let stream = null; // Store the stream globally

function onAccessApproved(stream) {
    recorder = new MediaRecorder(stream);

    recorder.start(1000);

    recorder.onstop = function () {
        stream.getTracks().forEach(function (track) {
            if (track.readyState === "live") {
                track.stop();
            }
        });

        // sendChunksSequentially(chunks, 0);
    };

    recorder.ondataavailable = function (event) {
        const recordedBlob = event.data;
        // chunks.push(recordedBlob);
        sendChunksSequentially(recordedBlob);
    };
}

function sendChunksSequentially(chunks) {
    // const chunk = chunks[index];
    const formData = new FormData();
    formData.append("file", chunks, "screen-recording.webm");

    fetch("https://chrome-extenion.onrender.com/api/video/save", {
        method: "POST",
        body: formData,
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "open_dialog_box" && !isRecording) {
        console.log("request recorded");

        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices
            .getDisplayMedia({
                audio: true,
                video: {
                    width: 99999999999,
                    height: 99999999999,
                },
            })
            .then((stream) => {
                isRecording = true;
                onAccessApproved(stream); // Call onAccessApproved with the obtained stream
            });
    } else if (message.action === "stop-video" && isRecording) {
        console.log("stopping video");
        sendResponse(`processed: ${message.action}`);
        if (!recorder) return console.log("No Recorder");
        recorder.stop();
        isRecording = false;
        fetch("https://chrome-extenion.onrender.com/api/video/upload", {
            method: "POST",
        });
    }
});


// <==============================================================================================================>



