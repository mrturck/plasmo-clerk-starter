export {}

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  })

  chrome.tabs.sendMessage(tab.id, { action: "toggleUI" })
})
