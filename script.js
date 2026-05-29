function formatHex() {
            let input = document.getElementById("inputText").value;
            let cleanInput = input.replace(/\s+/g, '');
            let hexPairs = cleanInput.match(/.{1,2}/g);
            if (hexPairs) {
                document.getElementById("outputText").value = hexPairs.join(' ');
            } else {
                document.getElementById("outputText").value = "";
            }
        }
       function copyOutput() {
           const output = document.getElementById("outputText").value;
           if (!output) {
             alert("Nothing to copy!");
           return;
        }
          const tempTextarea = document.createElement('textarea');
          tempTextarea.value = output;
          document.body.appendChild(tempTextarea);
          tempTextarea.select();
          tempTextarea.setSelectionRange(0, 99999); // for mobile
          try {
          const successful = document.execCommand('copy');
          if (successful) {
             alert('Copied to clipboard!');
          } else {
             alert('Failed to copy!');
          }
          } catch (err) {
             alert('Failed to copy!');
          }
          document.body.removeChild(tempTextarea);
          }