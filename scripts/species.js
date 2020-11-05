var url="http://swapi.dev/api/species/";
var spec="";
function getSpecies(){
    str3="";
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(result){
            result.results.forEach(function(species) {
            spec+=

                '                    <tr>\n' +
                '                        <td>'+species.name+'</td>\n' +
                '                        <td>'+species.classification+'</td>\n' +
                '                        <td>'+species.designation+'</td>\n' +
                '                        <td>'+species.average_height+'</td>\n' +
                '                        <td>'+species.skin_colors+'</td>\n' +
                '                        <td>'+species.hair_colors+'</td>\n' +
                '                        <td>'+species.eye_colors+'</td>\n' +
                '                        <td>'+species.average_lifespan+'</td>\n' +
                '                    </tr>\n'

            });

            document.getElementById("display_species").innerHTML=spec;

        }});


}
getSpecies();