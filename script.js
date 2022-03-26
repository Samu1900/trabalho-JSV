//SCRIPT EXPANDIR TABELA
var table = document.getElementById('expandir'); //Div table/bloco
const minhaFunction = document.querySelector('.material-icons').addEventListener('click', function expandLess() {
    if (document.querySelector('.material-icons').innerHTML == 'expand_more') {
        document.querySelector('.material-icons').innerHTML = 'expand_less'; //Icone
        table.style.display = 'block'; //MAXIMIZA
    } else {
        document.querySelector('.material-icons').innerHTML = 'expand_more';
        table.style.display = 'none'; //MINIMIZA
    }
})