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


timers.forEach(({ timer, text }) => {
  setInterval(() => {
    if (timer > 0) {
      timer--;
    } else {
      chrome.runtime.sendMessage({
        action: "backgroundTaskCompleted",
        data: { message: text, timer: timer }
      });
      timer = timer * 60; // Reset timer
    }
  }, 1000);
});




// chrome.runtime.onMessage.addListener((message) => {
//   if (message.action === 'backgroundTaskCompleted') {
//     // Handle the message from the service worker
//     console.log('Received message from service worker:', message.data);
//     alert(message.data)
//   }
// });