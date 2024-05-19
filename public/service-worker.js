// chrome.action.onClicked.addListener(tab => {
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         func: () => {
//             alert("browser started")
//             console.log("clicked ")
//         }
//     })
// })

// chrome.windows.onCreated.addListener(function() {
//     console.log("browser started")
//     alert("browser started")
//     })

// console.log('Background script started.');

// setInterval(() => {
//   console.log('Background script is running.');
// }, 5000);


const timers = [
  { timer: 0.1 * 60, text: "Timer 1 is completed" },
  { timer: 5 * 60, text: "Timer 2 is completed" },
  { timer: 7 * 60, text: "Timer 3 is completed" }
];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received message:", request);
  if (request.action === "checkIfInitialized") {
    timers.forEach(({ timer, text }) => {
      setInterval(() => {
        if (timer > 0) {
          timer--;
        } else {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
              return;
            }
            if (tabs.length === 0 || !tabs[0].id) {
              console.error("No active tab found or tab id is undefined.");
              return;
            }
            chrome.tabs.sendMessage(tabs[0].id, {action: "backgroundMessage", timer: timer,text: text }, function(response) {
              console.log("sent message")
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
              } else {
                console.log("Response from content script:", response);
              }
            });
          });
          timer = timer * 60; // Reset timer
        }
      }, 1000);
    });
    sendResponse({ initialized: true });
  }
  // Return true to indicate you want to send a response asynchronously
  return true;
});




