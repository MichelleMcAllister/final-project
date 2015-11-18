var fetchJSON = new eventsPage();
console.log(eventsPage);
var posts = [];
//return querystring part of a url
var query= window.location.search;
//extracts the characters from a string, between specified instances and return with new sub string.

alert(query);

 var id= query.substr(1);

//id=1;

console.log(id);
console.log(window.location.hash)

//alert('a');

fetchJSON.request("GET", "posts/"+id).then(function(res){


  alert(res.featured_image);
  console.log(res);
  var myArticle = "";

   myArticle += "<div id='evTitle'>" +res.title+ "</div>" + "<img src=" +res.featured_image+ ">";

  //console.log(myArticle);
  document.getElementById('article').innerHTML = myArticle;

});
