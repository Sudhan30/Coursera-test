document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
  		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
      		document.getElementById("Sudhan").innerHTML = xhttp.responseText;
    	}
  			};
  			xhttp.open("GET", "./Data/name.json", true);
  			xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
  			xhttp.send();
});

        
      });