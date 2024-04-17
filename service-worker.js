chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert("browser started")
            console.log("clicked ")
        }
    })
})

chrome.windows.onCreated.addListener(function() {
    console.log("browser started")
    alert("browser started")
    })