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

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'backgroundTaskCompleted') {
    // Handle the message from the service worker
    console.log('Received message from service worker:', message.data);
    alert(message.data)
  }
});