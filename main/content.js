document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      document.getElementById("btn").addEventListener("click", () => {
        const newimage = document.getElementById("URLInput").value;
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: (newimage) => {
            const images = document.querySelectorAll("img");
         
            console.log(newimage);
            images.forEach((img) => {
             // img.remove();
            if(newimage !== null) {
                img.src = newimage;
            } 
              
            });
          },
          args: [newimage], 
        });
      });
    });
  });
  