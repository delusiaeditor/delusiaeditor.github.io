function save(){
        let data = document.getElementById("story").value;
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        let title = document.getElementById("title").value || "ExampleGame"
        const sFileName = title + '.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
}

function html(){
  let title = document.getElementById("title").value || "ExampleGame"
  let html = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
        body {
          color: ${document.getElementById("text").value };
          background-color: ${document.getElementById("bg").value };
          font-family: ${document.getElementById("font").value };
        }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
    <p id="passage"></p>
    <button id="button" onClick="next()">Next Passage</button>
    <script>
      let code = \`${document.getElementById("story").value}\`
      let passages = code.split("----");
      let i = 0;
      document.getElementById("passage").innerHTML = passages[i];
      function next(){
         i++
         document.getElementById("passage").innerHTML = passages[i];
         let l = i;

         if(passages.length == l) {
           document.getElementById("passage").innerHTML = "<h2>The End</h2>";
document.getElementById("button").style.display = "none";
         }
      }
    </script>
  </body>
</html>`
  return html;
}

function play() {
  var doc = document.getElementById('htmlview').contentWindow.document;
doc.open();
doc.write(html());
doc.close();
}

function exportF(){
  let data = html()
        const textToBLOB = new Blob([data], { type: 'text/html' });
        let title = document.getElementById("title").value || "ExampleGame"
        const sFileName = title + '.html';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
}