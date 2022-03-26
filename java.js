var table = document.getElementById('expandir2'); //Div table/bloco
const minhaFunction = document.querySelector('.material-icons').addEventListener('click', function expandLess() {
    if (document.querySelector('.material-icons').innerHTML == 'expand_more') {
        document.querySelectorAll('h2')[2].style.display = 'block';
        document.querySelector('.material-icons').innerHTML = 'expand_less'; //Icone
        table.style.display = 'block'; //MAXIMIZA
    } else {
        document.querySelector('.material-icons').innerHTML = 'expand_more';
        table.style.display = 'none'; //MINIMIZA

        document.querySelectorAll('h2')[2].style.display = 'none';
        
        
    }
})




