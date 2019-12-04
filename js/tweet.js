$( document ).ready(function() {
    loadData();
});


function loadData(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "tweets.json",
    dataType: "json",
    success: parseData
  });
}

function parseData(data) {
  console.log(data);
  var htmlBuilder = "";

  for (var i = 0; i <data.length; i++){
    var screenName = data[i].screenName;
    var profileImage = data[i].profileImage;
    var text = data[i].text;

    htmlBuilder += '<div class="row java-row"><div class="col-2"><img class="prof-pic" src="'+profileImage+'"></div>'
    htmlBuilder += '<div class="col-10"><h3 class="java-h32">'+screenName+'</h3></div></div>'
    htmlBuilder += '<div class="row"><p>'+text+'</p></div>'
    htmlBuilder +='<br>'
  }


  $("#twitter-feed").html(htmlBuilder);
  console.log(html);
}
