var url = 'https://swapi.dev/api/films/';
var str = '';

const searchBar=document.getElementById('searchBar');
function getMovies(){
    str = '';
    var searchUrl = url;
    if(!!searchBar.value){
        searchUrl=url+'?search='+searchBar.value;
    }
    // document.getElementById('display-movies').innerHTML=str;
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url: searchUrl,
        success: function(result){
            result.results.forEach(function(movie) {
                str += `<div class="col-md-4">
                    <div class="card mt-3">
                    <div class="card-header">  
                    <h3>${movie.title}</h3></div>
                 <div class="card-body">
                <p>${movie.opening_crawl.substring(0,150)}... <a href="moreDetalis.html?id=${movie.episode_id}">see more in details</a></p>
                 <a href="moreDetalis.html?id=${movie.episode_id}"><button class="btn btn-primary">More detalis</button></a>
                                    </div>
                                </div>
                           </div>`



            });

            document.getElementById('display-movies').innerHTML=str;

        }});
}

function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

let myEfficientFn = debounce(function() {
    getMovies();
}, 1000);

searchBar.addEventListener('keyup', myEfficientFn);

getMovies();