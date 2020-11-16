
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

                str += `<h3>Movie title:${movie.title}</h3>
                                <p>Director: ${movie.director}</p>
                               <p>Producer: ${movie.producer}</p>
                                <p>Realise date: ${movie.release_date}</p>
                                <p>Character:</p>
                    <div id="people_names"></div>`;

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

