$(document).foundation();

$(document).ready(function(){
  $("#home_movie_input").focus();
  $("#movie_box").hide();
});

$("#loader").hide();

    var source   = $("#movie_script").html();
    var template = Handlebars.compile(source);

    var searchSource   = $("#results_script").html();
    var searchTemplate = Handlebars.compile(searchSource);

    var router = new Grapnel({ pushState: false });

    router.get('/search/:title?', function(req){
        
        var title = req.params.title;
        $("#home_movie_input").val(title);

        var searchAni = new TimelineLite({onComplete:movieSearch});
        searchAni.to( $(".color_overlay"), 1, {backgroundColor: 'rgb(255, 193, 7)'});
        searchAni.to( $("#home-text"), 1, {top: -270});
        searchAni.to( $("#movie_box"), 1, {top: -270});
        
        $( "#movie_details-row" ).html("");
        function movieSearch(){
          $("#loader").show();

          $.getJSON( "http://www.omdbapi.com/?s='" + title + "'&r=json&type=movie", function( data ) {
            var html = searchTemplate(data);
            //console.log(data);
            //console.log(html);
            $("#movie_results-row").html(html);
            var movieListPlaced = new TimelineLite();
              movieListPlaced.fromTo("#search-results", 1, { autoAlpha:0, ease:Linear.easeNone}, {autoAlpha:1, ease:Linear.easeNone});
            $("#loader").hide();
          });
        }
    });

    router.get('/movie/:id?', function(req){
        var id = req.params.id;
        $(".color_overlay").css("background-color", "rgb(255, 193, 7)");
        $("#home-text").css("top", "-270px");
        $("#movie_box").css("top", "-270px");
        $("#movie_box").css("opacity", "1");

        function resultsSlide(){
          $("#loader").show();
          
          var listAni = new TimelineLite({onComplete:moviePlace});
          listAni.to( $("#search-results"), 1.5, {top: 350});
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        }
        resultsSlide();
        function moviePlace(){
          $.getJSON( "http://www.omdbapi.com/?i="+ id + "&r=json&type=movie&plot=short", function( data ) {
            var html = template(data);
            //console.log(data);
            $( "#movie_details-row" ).html(html);
              var moviePlaced = new TimelineLite();
              moviePlaced.fromTo("#movie_box", 1, { autoAlpha:0, ease:Linear.easeNone}, {autoAlpha:1, ease:Linear.easeNone});
              moviePlaced.to( $("#search-results"), 1, {top: -200});

              $("#loader").hide();



          });
        }
    });


    $( "#submit_search-button" ).click(function(e) {
        var searchTitle = $("#home_movie_input").val();
        router.navigate('/search/' + searchTitle);
        $("#loader").show();

    });