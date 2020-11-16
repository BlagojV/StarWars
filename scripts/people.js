var url = 'https://swapi.dev/api/people/';
var str = '';
function getPeople(url, pageNumer=1){
    str = '';
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(result){
            result.results.forEach(function(people) {
                str +=`<ul>
                            <li><a href="#" onclick="findPerson(\'${ people.url} \')">${people.name}</a></li>
                        </ul>`;

                document.getElementById('display_people').innerHTML=str;
            });
        calculatePages(result.count);
            selectPage(pageNumer);
        }});
}

function  findPerson(url){
    let peoples = '';
    $.ajax({
        method: 'GET',
        responseText: 'JSON',
        url: url, success: function (people) {
            peoples +=`<h5>Name: ${people.name}</h5>
                        <p>Height: ${people.height}</p>
                        <p>Mass: ${people.mass}</p>
                        <p>Hair color: ${people.hair_color}</p>
                        <p>Skin color: ${people.skin_color}</p>
                        <p>Eye color: ${people.eye_color}</p>
                        <p>Birth year: ${people.birth_year}</p>
                       <p>Gender: ${people.gender}</p>
                        <p>Homeworld: ${people.homeworld}</p> `;

            document.getElementById('list_people').innerHTML=peoples;
        }
    });
}
function goToPage(pageNumber){
    getPeople(url+'?page='+pageNumber,pageNumber);
}

getPeople(url);
