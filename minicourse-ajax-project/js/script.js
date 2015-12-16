
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var $searchTerm;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $("form").submit(function(event) {
        var $city = $("#city").val();
        var $street = $("#street").val();
        $searchTerm = $city;
        var $address = $street.trim() + ", " + $city;
        console.log("address is :" + $address);
        var imageTag = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + $address + '">';
        $body.append(imageTag);
    });
    
    var $api_key="56dda0abb61e8c41932df7baf8df0e5a:1:73776542";

    var url="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $searchTerm + "&api-key=" + $api_key;
    console.log("url is:" + url);
  
    var url=url+"123";
    $.getJSON(url, function(data){
        $nytHeaderElem.text("New York Times Articles About " + $searchTerm);
        var articles = data.response.docs;
        articles.forEach(function(art){
            $nytElem.append('<li class="article">' +
                '<a href="' + art.web_url+'">'+art.headline.main+'</a>'+
                '<p>' + art.snippet + '</p>' + '</li>');
        })
    }).error(function(){
        $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });
    
                

    return false;
};

$('#form-container').submit(loadData);

// loadData();
