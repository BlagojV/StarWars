
var url = 'https://swapi.dev/api/films/';
var str = '';
function getMovies(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    url+=id+'/';
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(movie){

                str +='<h3>Movie title:'+movie.title+'</h3>\n' +
                    '            <p>Director: '+movie.director+'</p>\n' +
                    '            <p>Producer: '+movie.producer+'</p>\n' +
                    '            <p>Realise date: '+movie.release_date+'</p>\n' +
                    '            <p>Character:</p>\n' +
                    '<div id="people_names"></div>';

            document.getElementById('more_details').innerHTML=str;
            getCharacters(movie);

        }});
}

function getCharacters(movie)
{
    var pepole = '';
    if (!!movie && movie.characters) {
        movie.characters.forEach(x => {
            $.ajax({
                method: 'GET',
                responseText: 'JSON',
                url: x, success: function (people) {
                    pepole +='<span>'+people.name+', </span>';

                    document.getElementById('people_names').innerHTML=pepole;
            }
            });
        });
    }
}


getMovies();

