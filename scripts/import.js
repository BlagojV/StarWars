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
function calculatePages(pages){
    const totalPages = pages / 10;
    let numberOfPages =  Math.round(totalPages);
    if(numberOfPages< totalPages) {
        numberOfPages +=1;
    }
    let str='';
    for(let i=1;i<=numberOfPages;i++){
        str+=`<a href="#" class="'+i+'" onclick="goToPage(\'${i}\')">${i}</a>`;
    }
    document.getElementById('pagination').innerHTML=str;
}


