function map(){
	var map = L.map('map').setView([38.3473356,-0.486541], 11);
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  //var osmUrl = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
	L.tileLayer(osmUrl, {	
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
	  }).addTo(map); 
  }

function progressBar(bar){
   var width = Number($(bar).text()); 
   var tW = 1;
    var id = setInterval(frame, 35);  
    function frame() {
        if (tW >= width) {
            clearInterval(id);
        } else {
          tW++;
          bar.width(tW + '%'); 
          bar.text(tW  + '%');
        } 
    }  
}   

$(document).ready(function() {
  
  
for(var i=1; i<= $("li").length; i++){
  progressBar($("#myBar"+i));  
}
  
  map();
  
});
