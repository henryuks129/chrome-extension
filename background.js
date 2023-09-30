chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=> {
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./content.js"]
        }).then(()=>{
            console.log("content script has been injected")
        }).catch(err => console.log(err))
    }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    console.log(sender);
    sendResponse("From the background Script");
})