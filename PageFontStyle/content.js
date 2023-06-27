chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessageExternal.addListener((req, sender, res) => {
  alert(req.todo);
  if (req.todo == "changeColor") {
    let addColor = `#${req.clickedColor}`;
    alert(addColor);
    $(".type--h2").css("color", addColor);
  }
});
