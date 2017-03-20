var randomURL = "https://en.wikipedia.org/wiki/Special:Random";

$('#random').click(function(){
    window.open(randomURL);    
});

$('#wText').keypress(function(e) {
    if(e.which == 13) {
      $('#result').html("");
      searchEntry($('#wText').val());
    }
});

function searchEntry(textSearch){
if(textSearch != null){
var searchURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+textSearch+'&inprop=url&callback=?';
$.ajax({
    url: searchURL,
    dataType: "jsonp",
    success: function(data) {
      $.each(data.query.pages,function(k,v){
           $("#result").append("<a href='https://en.wikipedia.org/?curid="+v.pageid+"' target='_blank' class='list-group-item result'><h2>"+v.title+"</h2><br><p>"+v.extract+"</p></a>");
      }); 
    }
  });
  } 
}
