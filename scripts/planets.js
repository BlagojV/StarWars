var url='http://swapi.dev/api/planets/';
var str3="";
function getPlanets(url,pageNumer=1){
    str3="";
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(result){
            result.results.forEach(function(planets) {
               str3+=`<div class="col-lg-2">
                               <div class="card">
                                  <div class="card-header">
                                       <h4>${planets.name}</h4>
                                   </div>
                                   <div class="card-body">
                                      <p><b>Rotation period:</b>${planets.rotation_period}</p>
                                       <p><b>Orbital period:</b>${planets.orbital_period}</p>
                                       <p><b>Diameter:</b>${planets.diameter}</p>
                                       <p><b>Climate:</b>${planets.climate}</p>
                                       <p><b>Gravity:</b>${planets.gravity}</p>
                                         <p><b>Terrain:</b>${planets.terrain}</p>
                   
                                   </div>
                                                  </div>
                    
                           </div>`;

                document.getElementById("display_planets").innerHTML=str3;

            });
            calculatePages(result.count);
            selectPage(pageNumer)

        }});
}

function goToPage(pageNumber){
    getPlanets(url+'?page='+pageNumber,pageNumber);
}

getPlanets(url);