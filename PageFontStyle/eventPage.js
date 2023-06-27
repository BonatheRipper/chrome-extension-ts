chrome.runtime.onMessageExternal.addListener((req, sender, res) => {
  if (req.todo === "showPageAction") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.action.setIcon({
        path: {
          16: "icon16.png",
          48: "icon48.png",
          128: "icon128.png",
        },
        tabId: tabs[0].id,
      });
    });
  }
});
