$( document ).ready(function() {
    loadArticles();
});


function loadArticles(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "https://newsapi.org/v2/everything?q=luka%20doncic%20mvp&sortBy=relevancy&language=en&pageSize=5&apiKey=08e18fce79144d9db58eebdd3b05e55b",
    dataType: "json",
    success: parseArticles
  });
}

function parseArticles(data) {
  console.log(data);

  var articles = [];

  var tempPath = data["articles"];

  var html = "";

  for (var i = 0, len = tempPath.length; i < len; ++i) {
    articles.push(tempPath[i]);
    console.log(articles[i]["title"]);
    console.log(tempPath[i]["title"])

    html += '<div><h3 class="java-h3"><a href="' + articles[i]["url"] + '">' + articles[i]["title"] + '</a></h3><div';
    html += '<p class="java-p">' + articles[i]["description"] + '</p>';

  }

  $("#feed-area").html(html);
  console.log(html);
}
