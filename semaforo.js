cambiacolore();

function cambiacolore()
{
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('yellow').style.backgroundColor = 'black';
document.getElementById('green').style.backgroundColor = 'black';
setTimeout(cambiacolore2,2000);
}

function cambiacolore2()
{
document.getElementById('red').style.backgroundColor = 'black';
document.getElementById('yellow').style.backgroundColor = 'orange';
document.getElementById('green').style.backgroundColor = 'black';
setTimeout(cambiacolore3,2000);
}

function cambiacolore3()
{
document.getElementById('red').style.backgroundColor = 'black';
document.getElementById('yellow').style.backgroundColor = 'black';
document.getElementById('green').style.backgroundColor = 'green';
setTimeout(cambiacolore4,2000);
}

function cambiacolore4()
{
document.getElementById('red').style.backgroundColor = 'black';
document.getElementById('yellow').style.backgroundColor = 'orange';
document.getElementById('green').style.backgroundColor = 'black';
setTimeout(cambiacolore,2000);
}
