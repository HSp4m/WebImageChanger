
document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      document.getElementById("btn").addEventListener("click", () => {
        const newimage = document.getElementById("URLInput").value;
        const deleteInput = document.getElementById('delete').checked;
        const replaceInput = document.getElementById('replace').checked;
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: (newimage,delet,replace) => {
            const images = document.querySelectorAll("img");
         
            try{
            if(replace && !delet) {
              images.forEach((img) => {
                
               if(newimage !== null) {
                   img.src = newimage;
               } 
                 
               });
            } else if(!replace && delet) {
              images.forEach((img) => {
                img.src = "";
               });
            }
            else if(replace && delet) {
              alert('No multiple choises allowed');
            } else if(!replace && !delet) {
              alert('Choise one method');
            }
            
          }
          catch(err) {
            alert(err);
          }
        }
          ,
          args: [newimage,deleteInput,replaceInput], 
        });
      });
    });
  });
  