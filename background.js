// background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "disableExtension") {
      chrome.management.setEnabled(request.extensionId, false, function() {
        console.log('Extension disabled');
      });
    }
  });
  
  
