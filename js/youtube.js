/**
  * Sample JavaScript code for youtube.search.list
  * See instructions for running APIs Explorer code samples locally:
  * https://developers.google.com/explorer-help/guides/code_samples#javascript
  */

 function authenticate() {
   return gapi.auth2.getAuthInstance()
       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
       .then(function() { console.log("Sign-in successful"); },
             function(err) { console.error("Error signing in", err); });
 }
 function loadClient() {
   gapi.client.setApiKey("AIzaSyBtWkUZXQyrgB3K9-0rFJZYY7YaJf4wfV0");
   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
       .then(function() { console.log("GAPI client loaded for API"); },
             function(err) { console.error("Error loading GAPI client for API", err); });
 }
 // Make sure the client is loaded and sign-in is complete before calling this method.
 function execute() {
   return gapi.client.youtube.search.list({
     "part": "snippet",
     "q": "luka doncic highlights"
   })
       .then(function(response) {
               // Handle the results here (response.result has the parsed body).
               console.log("Response", response);
             },
             function(err) { console.error("Execute error", err); });
 }
 gapi.load("client:auth2", function() {
   gapi.auth2.init({client_id: "1080960874716-9gmoihiko5egtfm675lh71krf7hd6vg9.apps.googleusercontent.com"});
 });


function parseVideos(response){
  var html = "";
  var tempPath = response.result.items;
  console.log(response.result.etag);
  console.log(response.result.items[0].snippet.title);
  console.log(tempPath[0].snippet.thumbnails.default.url);

  for (var i = 0, len = response.result.items.length; i < len; ++i) {
    console.log("item " + i);
    html += '<div class="col-md-8 col-lg-8 mx-auto">'
    html += '<h3 class="java-h3 text-center">' + tempPath[i].snippet.title + '</h3>';
    html += '<iframe class="embed-responsive text-center" width="560" height="315" src="https://www.youtube.com/embed/' + tempPath[i].id.videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    html += '</br></br>';
    html += '</div>'

  }
  document.getElementById("results").innerHTML = html;

}
