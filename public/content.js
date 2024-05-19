console.log("content js runnings ")

chrome.runtime.onConnect.addListener(
  ()=>{
    console.log("onConnect content js runnings ")

  }
)

chrome.runtime.sendMessage({ action: "checkIfInitialized" }, (response) => {
    console.log("Received message:", request);
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(response);
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received message in content script:", request);
  if (request.action === "backgroundMessage") {
    console.log("Handling backgroundMessage");
    sendResponse({ response: "Content script received message" });
  }
});
    }
  });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
console.log("message",message)
  if (message.text == "completed"){
    console.log("script1")
    alert("completed")
  }
});

function connectToBackground() {
  chrome.runtime.sendMessage({ action: "checkIfInitialized" }, (response) => {
    console.log("response",response)
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "backgroundTaskCompleted") {
          console.log("1 Background task completed:", message.data);

        }
      });
    if (response && response.initialized) {
      console.log("Background script is initialized. Connecting...");
      chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "backgroundTaskCompleted") {
          console.log("Background task completed:", message.data);

        }
      });
    } else {
      console.log("Background script is not yet initialized. Waiting...");
      setTimeout(connectToBackground, 1000); // Retry after 1 second
    }
  });
}

connectToBackground();
