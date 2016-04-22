document.addEventListener("DOMContentLoaded",
  function (event) {
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
  		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
      		document.getElementById("Sudhan").innerHTML = xhttp.responseText;
          test =JSON.parse(xhttp.responseText);

           /*for (var key in test) {
       if (test.hasOwnProperty(key)) {
          console.log(test[key].short_name);
       }

    }*/
      var max= test.length;
      var min= 1;
      random= Math.floor((Math.random() * (max - min) + min));
      console.log(random);
      console.log(test[random].short_name)

          document.getElementById("Raj").innerHTML= test.short_name;

    	}
  			};
  			xhttp.open("GET","http://davids-restaurant.herokuapp.com/categories.json", true);
  			xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
  			xhttp.send();

});

        
      });