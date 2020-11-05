var url = 'https://swapi.dev/api/people/';
var str = '';
function getPeople(url, pageNumer=1){
    str = '';
    $.ajax({
        method:'GET',
        responseText:'JSON',
        url, success: function(result){
            result.results.forEach(function(people) {
                str +='      <ul>\n' +
                    '        <li><a href="#" onclick="findPerson(\'' + people.url + '\')">'+people.name+'</a></li>\n' +
                    '    </ul>';

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
            peoples +='<h5>Name:'+people.name+'</h5>\n' +
                '        <p>Height: '+people.height+'</p>\n' +
                '        <p>Mass: '+people.mass+'</p>\n' +
                '        <p>Hair color: '+people.hair_color+'</p>\n' +
                '        <p>Skin color: '+people.skin_color+'</p>\n' +
                '        <p>Eye color: '+people.eye_color+'</p>\n' +
                '        <p>Birth year: '+people.birth_year+'</p>\n' +
                '        <p>Gender: '+people.gender+'</p>\n' +
                '        <p>Homeworld: '+people.homeworld+'</p>\n' ;

            document.getElementById('list_people').innerHTML=peoples;
        }
    });
}

function calculatePages(pages){
    const totalPages = pages / 10;
  let numberOfPages =  Math.round(totalPages);
  if(numberOfPages< totalPages) {
      numberOfPages +=1;
  }
let str='';
  for(let i=1;i<=numberOfPages;i++){
       str+='<a href="#" class="'+i+'" onclick="goToPage(\''+i+'\')">'+i+'</a>';
    }
    document.getElementById('pagination').innerHTML=str;
}

function goToPage(pageNumber){
    getPeople(url+'?page='+pageNumber,pageNumber);

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
getPeople(url);

