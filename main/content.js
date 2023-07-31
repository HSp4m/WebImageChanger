document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      document.getElementById("btn").addEventListener("click", () => {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: () => {
            const images = document.querySelectorAll("img");
            const newimage = document.getElementById("input").value;
            console.log(newimage);
            images.forEach((img) => {
             // img.remove();
            if(newimage !== null) {
                img.src = newimage;
            }
              
            });
          },
        });
      });
    });
  });
  