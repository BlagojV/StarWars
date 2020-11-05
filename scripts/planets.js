var url='http://swapi.dev/api/planets/';
var str3="";
function getPlanets(url,pageNumer=1){
    str3="";
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(result){
            result.results.forEach(function(planets) {
               str3+='<div class="col-lg-2">\n' +
                   '            <div class="card">\n' +
                   '                <div class="card-header">\n' +
                   '                    <h4>'+planets.name+'</h4>\n' +
                   '                </div>\n' +
                   '                <div class="card-body">\n' +
                   '                    <p><b>Rotation period:</b>'+planets.rotation_period+'</p>\n' +
                   '                    <p><b>Orbital period:</b>'+planets.orbital_period+'</p>\n' +
                   '                    <p><b>Diameter:</b>'+ planets.diameter+'</p>\n' +
                   '                    <p><b>Climate:</b>'+planets.climate+'</p>\n' +
                   '                    <p><b>Gravity:</b>'+ planets.gravity+'</p>\n' +
                   '                      <p><b>Terrain:</b>'+planets.terrain+'</p>\n' +
                   '\n' +
                   '                </div>\n' +
                   '\n' +
                   '            </div>\n' +
                   '\n' +
                   '        </div>'

                document.getElementById("display_planets").innerHTML=str3;

            });
            calculatePages(result.count);
            selectPage(pageNumer)

        }});


}
function calculatePages(pages){
    const totalPages = pages / 10;
    let numberOfPages =  Math.round(totalPages);
    let str='';
    for(let i=1;i<=numberOfPages;i++){
        str+='<a href="#" class="'+i+'" onclick="goToPage(\''+i+'\')">'+i+'</a>';
    }
    document.getElementById('pagination').innerHTML=str;
}

function goToPage(pageNumber){
    getPlanets(url+'?page='+pageNumber,pageNumber);

}
function selectPage(pageNumber) {

    const pages = document.getElementById('pagination');

    const list =  pages.children;
    for(let i=0; i<list.length; i++ )
    {
        if(pageNumber.toString() === list[i].text){
            list[i].classList.add('active');
        }else{
            list[i].classList.remove('active');
        }

    }

}

getPlanets(url);