
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $("form").submit(function(event) {
        var $city = $("#city").val();
        var $street = $("#street").val();
        var $address = $street.trim() + ", " + $city;
        console.log("address is :" + $address);
        var imageTag = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + $address + '">';
        $body.append(imageTag);
    });
    
    //var imageUrl = "http://images.all-free-download.com/images/wallpapers_large/beautiful_flowers_wallpaper_flowers_nature_wallpaper_1304.jpg"
    &fq=source:("The New York Times");
    $.getJSON("ajax/test.json", function(data) {
        console.log(data);
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
