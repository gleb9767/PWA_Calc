const inputAge = document.querySelector('.age'),
inputWeight = document.querySelector('.weight'),
inputHeight = document.querySelector('.height'),
inputResult = document.querySelector('.result');

function formula1() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;
    if (isNaN(c)==true) c=0;

    var d = 10 * parseFloat(b) + 6.25 * parseFloat(c) - 5 * parseFloat(a) + 5;
    var f = b / ((c / 100) * (c / 100));

    document.getElementById('resl').innerHTML = "Количество калорий: " + f + "; Индекс массы тела: " + d

    if (f <= 16)
    alert ("Данное значение ИМТ соответствует: Выраженному дефициту массы тела");
    if (f > 16 && f < 18.5)
    alert ("Данное значение ИМТ соответствует: Недостаточной массе тела");
    if (f >= 18.5 && f < 25)
    alert ( "Данное значение ИМТ соответствует: Нормальной массе тела");
    if (f >= 25 && f < 30)
    alert ( "Данное значение ИМТ соответствует: Избыточной массе тела (предожирение)");
    if (f >= 30 && f < 35)
    alert ( "Данное значение ИМТ соответствует: Ожирению 1-ой степени");
    if (f >= 35 && f < 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 2-ой степени");
    if (f > 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 3-ой степени");

    /*var ele = document.getElementsByName('r1');
    for(i = 0; i < ele.length; i++) 
    {
        if(ele[i].checked)
        document.getElementById("resl").innerHTML= "Результат: "+ele[i].value;
    }*/
}

function formula2() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;
    if (isNaN(c)==true) c=0;

    var d = 66.5+(13.75*b)+(5.003*c) - (6.775 * a);
    var f = b / ((c / 100) * (c / 100));


    document.getElementById('resl').innerHTML = "Количество калорий: " + f + "; Индекс массы тела: " + d

    if (f <= 16)
    alert ("Данное значение ИМТ соответствует: Выраженному дефициту массы тела");
    if (f > 16 && f < 18.5)
    alert ("Данное значение ИМТ соответствует: Недостаточной массе тела");
    if (f >= 18.5 && f < 25)
    alert ( "Данное значение ИМТ соответствует: Нормальной массе тела");
    if (f >= 25 && f < 30)
    alert ( "Данное значение ИМТ соответствует: Избыточной массе тела (предожирение)");
    if (f >= 30 && f < 35)
    alert ( "Данное значение ИМТ соответствует: Ожирению 1-ой степени");
    if (f >= 35 && f < 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 2-ой степени");
    if (f > 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 3-ой степени");
}
