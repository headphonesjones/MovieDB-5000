$(document).foundation();

$(document).ready(function(){
  $("#home_movie_input").focus();
  $("#movie_box").hide();
});


/* GET HITTING ENTER TO FIRE CLICK SUBMIT */
/*
$( "#submit_search-button" ).click(function() {
    var searchAni = new TimelineLite();
    searchAni.to( $("#home-text"), 1, {top: -200} );

    $("#movie-list").html(''); 
    $("#movie_box").show("slow");

    var searchTitle = $("#home_movie_input").val();

    $.getJSON( "http://www.omdbapi.com/?t='" + searchTitle + "'&y=&plot=short&r=json", function( data ) {
      var items = [];
      $.each( data, function( key, value ) {
        items.push( "<li class='movie_" + key + "'>" + value + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        "id" : "movie-list",
        html: items.join( "" )
      }).appendTo( ".movie_info-container" );
    });
});
*/
/*

!function ($) {
    $(function () {
        $('#t').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-title-button').click();
            } else {
                return false;
            }
        });
        $('#i').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-id-button').click();
            } else {
                return false;
            }
        });
        $('#search-by-title-button').click(function () {
            var c = $('#home_movie_input').val();
            var d = 'http://www.omdbapi.com/?' + c;
            var e = $('#search-by-title-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-title-response');
            $.ajax({
                type: 'GET',
                dataType: 'text',
                url: '/?' + c,
                statusCode: {
                    403: function () {
                        f.find('pre').html('HTTP 403 Forbidden!');
                    }
                },
                success: function (a) {
                    f.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
                },
                complete: function () {
                    f.show('slow');
                }
            });
        });
        $('#search-by-title-reset').click(function () {
            var a = $('#search-by-title-request');
            a.hide('slow');
            a.find('a').attr('href', 'javascript:;').html('');
            var b = $('#search-by-title-progress');
            b.hide('slow');
            var c = $('#search-by-title-response');
            c.hide('slow');
            c.find('pre').html('');
        });
    });
} (window.jQuery);
*/