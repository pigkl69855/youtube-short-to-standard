var getSelectedTab = (tab) => {

  var tab = tab[0];
  document.getElementById('standard').addEventListener('click', async () => {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;

      if (url.includes("youtube.com")) {

        changedUrl = url.replace(/shorts\//, "watch?v=");

        chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
          chrome.tabs.update(undefined, { url: changedUrl });
        });
      }
    });
  })

}
chrome.tabs.query({ active: true, currentWindow: true }, getSelectedTab);