// chrome.action.onClicked.addListener(tab => {
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id}
//     })
// })

chrome.runtime.onStartup.addListener(()=> {
    console.log("browser started")
    chrome.scripting.executeScript({
        func: () => {
            alert("browser started")
        }
    })
})