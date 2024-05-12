console.log("content js runnings ")

function connectToBackground() {
  console.log("connectToBackground runnings ")

  chrome.runtime.sendMessage({ action: "checkIfInitialized" }, (response) => {
    console.log("response",response)
    if (response && response.initialized) {
      console.log("Background script is initialized. Connecting...");
      // Now you can safely communicate with the background script
    } else {
      console.log("Background script is not yet initialized. Waiting...");
      setTimeout(connectToBackground, 1000); // Retry after 1 second
    }
  });
}

connectToBackground();
