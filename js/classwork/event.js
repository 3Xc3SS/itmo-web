function whichButton1(event)
{
  switch (event.button) {
              case 0:
                  alert('Нажата левая кнопка.');
              break;

              case 1:
                  alert('Нажата средняя кнопка или колёсико.');
              break;

              case 2:
                  alert('Нажата правая кнопка.');
              break;

              default:
                  alert('Неопределённое событие: ' + btnCode);
          }
}

function whichButton2(event)
{
alert(event.keyCode);
}

function show_coords(event)
{
var x=event.clientX;
var y=event.clientY;
alert("Координата X: " + x + ", Координата Y: " + y);
}

function coordinates(event)
{
var x=event.screenX;
var y=event.screenY;
alert("X=" + x + " Y=" + y);
}

function whichElement(e)
{
var targ;
if (!e)
  {
  var e=window.event;
  }
if (e.target)
  {
  targ=e.target;
  }
else if (e.srcElement)
  {
  targ=e.srcElement;
  }
if (targ.nodeType==3)
  {
  targ = targ.parentNode;
  }
var tname;
tname=targ.tagName;
alert("Вы нажали на элементе " + tname + ".");
}

function getEventType(event)
{
alert(event.type);
}