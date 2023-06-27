chrome.runtime.onInstalled.addListener(() => {
  const contextMenuItem = {
    id: "spendMoney",
    title: "Spend Money",
    contexts: ["selection"],
  };
  chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "spendMoney" && info.selectionText) {
    // Handle the context menu click event
    // Perform desired actions here
  }
});
