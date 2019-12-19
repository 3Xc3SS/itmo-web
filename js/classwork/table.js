  
function changeBorder()
{
document.getElementById('Таблица').border="100";
}

function padding()
{
document.getElementById('Таблица').cellPadding="30";
}

function spacing()
{
document.getElementById('Таблица').cellSpacing="30";
}

function aboveFrames()
{
document.getElementById('Таблица').frame="above";
}

function belowFrames()
{
document.getElementById('Таблица').frame="below";
}

function createCaption()
{
var x=document.getElementById('Таблица').createCaption();
x.innerHTML="Реклама";
}

function deleteRow(r)
{
var i=r.parentNode.rowIndex;
document.getElementById('Таблица').deleteRow(i);
}

function insRow()
{
var x=document.getElementById('Таблица').insertRow(0);
var y=x.insertCell(0);
var z=x.insertCell(1);
var a=x.insertCell(2);
y.innerHTML="Да";
z.innerHTML="Да";
a.innerHTML="Да";
}

function insCell()
{
var x=document.getElementById('tr2').insertCell(0);
x.innerHTML="WHY";
}

function rightAlign()
{
document.getElementById('tr1').align="right";
}

function centerAlign()
{
document.getElementById('tr1').align="center";
}

function botAlign()
{
document.getElementById('tr1').vAlign="bottom";
}

function valignCell()
{
var x=document.getElementById('Таблица').rows[1].cells;
x[1].vAlign="top";
}

function changeContent()
{
var x=document.getElementById('Таблица').rows[0].cells;
x[0].innerHTML= "CODE";
}

function setColSpan()
{
var x=document.getElementById('Таблица').rows[0].cells;
x[0].colSpan="2";
}