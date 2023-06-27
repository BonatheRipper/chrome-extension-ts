$(() => {
  var fontColor = $("#fontColor").val();
  $("#fontColor").on("change paste keyup", function () {
    fontColor = $(this).val();
  });
  $("#btnChange").click(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: "changeColor",
        clickedColor: fontColor,
      });
    });
  });
});
