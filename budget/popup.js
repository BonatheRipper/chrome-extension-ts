$(() => {
  const spendBtn = $("#spendAmount");
  chrome.storage.sync.get("total", (budget) => {
    if (budget.total) {
      $("#total").text(budget.total);
    }
  });
  chrome.storage.sync.get("limit", (limitBudget) => {
    $("#limit").text(limitBudget.limit);
  });
  spendBtn.click(() => {
    chrome.storage.sync.get("limit", (limitBudget) => {
      chrome.storage.sync.get("total", (budget) => {
        let newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        let amount = $("#amount").val();
        if (amount) {
          newTotal += parseInt(amount);
          if (newTotal >= limitBudget.limit) {
            var notifOptions = {
              type: "basic",
              iconUrl: "icon48.png",
              title: " Limit reached!",
              message: "It seems you've reached your limit",
            };
            chrome.notifications.create("limitNotif", notifOptions);
            chrome.action.setBadgeText({ text: "Limit" });
            return alert(`Enter a Value Lower Than ${limitBudget.limit}`);
          }
        }
        chrome.storage.sync.set({ total: newTotal });
        $("#total").text(newTotal);
        $("#amount").val("");
      });
    });
  });
});
