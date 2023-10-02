document.addEventListener("DOMContentLoaded", ()=>{
    const recording = document.querySelector("button#start-video")
    const endRecording = document.querySelector("button#end-video")

    // adding event listeners

    recording.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response);
                } else{
                    console.log(chrome.runtime.lastError, "error line 13");
                }
            })
        })
    })

    endRecording.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stop-video"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response);
                } else{
                    console.log(chrome.runtime.lastError, "error line 25");
                }
            })
        })
    })
})


// document.addEventListener("DOMContentLoaded", () => {
//     const startRecordingToggle = document.querySelector("#start-video-switch");
//     const stopRecordingToggle = document.querySelector("#end-video-switch");

//     adding event listeners for start and stop toggles
//     startRecordingToggle.addEventListener("change", () => {
//         if (startRecordingToggle.checked) {
//             chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//                 chrome.tabs.sendMessage(tabs[0].id, { action: "open_dialog_box" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, "error line 45");
//                     }
//                 });
//             });
//         }
//     });

//     stopRecordingToggle.addEventListener("change", () => {
//         if (stopRecordingToggle.checked) {
//             chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//                 chrome.tabs.sendMessage(tabs[0].id, { action: "stop-video" }, function (response) {
//                     if (!chrome.runtime.lastError) {
//                         console.log(response);
//                     } else {
//                         console.log(chrome.runtime.lastError, "error line 59");
//                     }
//                 });
//             });
//         }
//     });
// });

