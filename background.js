chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const all = '*://*/*'
const screenwords = document.querySelectorAll("p");
var wlist = ["dog", "cats"]

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(all)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

  if (nextState === "ON") {
    // search for words in list
    for (var i = 0; i < screenwords.length; i++) {
      var results = screenwords.search(wlist[i]);
      if (results != -1) { // if words from list are found
        var foundwords = true; // set foundwords to true
        var wcounter++; // increment wcounter by +1
        var position.i = results;
        }
    };
  } else if (nextState === "OFF") {
    location.reload;
  }
});
