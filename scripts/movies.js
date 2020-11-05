var url = 'https://swapi.dev/api/films/';
var str = '';
function getMovies(){
    $.ajax({
    method:'GET',
    responseText:'JSON',
    url, success: function(result){
            result.results.forEach(function(movie) {
                str += '<div class="col-md-4">\n' +
                    '<div class="card mt-3">\n' +
                    '<div class="card-header">'+   '<h3>'+movie.title+'</h3></div>'+
                ' <div class="card-body">' +
                '<p>'+movie.opening_crawl.substring(0,150)+'... <a href="moreDetalis.html?id='+movie.episode_id+'">see more in details</a></p>\n' +
                ' <a href="moreDetalis.html?id='+movie.episode_id+'"><button class="btn btn-primary">More detalis</button></a>' +
                '                    </div>' +
                '                </div>\n' +
                '            </div>'

            });
            document.getElementById('display-movies').innerHTML=str;

    }});
}
getMovies();

