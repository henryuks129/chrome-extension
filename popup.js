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