
var fetchJSON = new eventsPage();

var posts = [];

fetchJSON.fetchProducts("GET", "posts").then(function(res){
  console.log(res);
  posts=res.posts;
  console.log(posts);
  var myPosts= "";

  for (var i=0; i < posts.length; i++){
    myPosts += "<div class= 'evTitle'>" + posts[i].title + "</a></div>" + "<div class='evDetails'>" + posts[i].featured_image + "</div>";
  }
  document.getElementById('evMain').innerHTML = myPosts;

});
