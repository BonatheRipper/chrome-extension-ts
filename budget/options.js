$(() => {
  $("#saveLimit").click(() => {
    let limitNew = $("#Limit").val();
    chrome.storage.sync.set({ limit: limitNew });
  });
  $("#showLimit").click(() => {
    chrome.storage.sync.get("limit", (budget) => {
      if (budget.limit) {
        alert(`Current Limit ${budget.limit}`);
      }
    });
  });
  $("#resetBtn").click(() => {
    chrome.storage.sync.set({ total: 0 });
  });
});
