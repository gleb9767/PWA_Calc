const inputAge = document.querySelector('.age'),
inputWeight = document.querySelector('.weight'),
inputHeight = document.querySelector('.height'),
inputResult = document.querySelector('.result');

function formula1() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

    var d = 10 * parseFloat(b) + 6.25 * parseFloat(c) - 5 * parseFloat(a) + 5;
    var f = b / ((c / 100) * (c / 100));

    if (isNaN(a) || isNaN(b) || isNaN(c)) 
    {
        alert( "Введите данные в поля." );
        document.getElementById("resl").innerHTML = "";
    }
    else if (a < 10 || a > 100)
    {
        alert ("Возраст не может быть меньше 10 или боольше 100 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else if (b < 20 || b > 300)
    {
        alert ("Вес не может быть меньше 20 или боольше 300 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else if (c < 50 || c > 250)
    {
        alert ("Рост не может быть меньше 50 или боольше 250 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else 
    {
        document.getElementById("resl").innerHTML = "";
        document.getElementById('resl').innerHTML = "Количество калорий: " + f + "; Индекс массы тела: " + d
    }

    if (f <= 16)
    alert ("Данное значение ИМТ соответствует: Выраженному дефициту массы тела");
    else if (f > 16 && f < 18.5)
    alert ("Данное значение ИМТ соответствует: Недостаточной массе тела");
    else if (f >= 18.5 && f < 25)
    alert ( "Данное значение ИМТ соответствует: Нормальной массе тела");
    else if (f >= 25 && f < 30)
    alert ( "Данное значение ИМТ соответствует: Избыточной массе тела (предожирение)");
    else if (f >= 30 && f < 35)
    alert ( "Данное значение ИМТ соответствует: Ожирению 1-ой степени");
    else if (f >= 35 && f < 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 2-ой степени");
    else if (f > 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 3-ой степени");

    var d = 10 * parseFloat(b) + 6.25 * parseFloat(c) - 5 * parseFloat(a) + 5;
    var f = b / ((c / 100) * (c / 100));
    
}

function formula2() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);

    var d = 10 * parseFloat(b) + 6.25 * parseFloat(c) - 5 * parseFloat(a) + 5;
    var f = b / ((c / 100) * (c / 100));

    if (isNaN(a) || isNaN(b) || isNaN(c)) 
    {
        alert( "Введите данные в поля." );
        document.getElementById("resl").innerHTML = "";
    }
    else if (a < 10 || a > 100)
    {
        alert ("Возраст не может быть меньше 10 или боольше 100 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else if (b < 20 || b > 300)
    {
        alert ("Вес не может быть меньше 20 или боольше 300 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else if (c < 50 || c > 250)
    {
        alert ("Рост не может быть меньше 50 или боольше 250 для точного результата");
        document.getElementById("resl").innerHTML = "";
    }
    else 
    {
        document.getElementById("resl").innerHTML = "";
        document.getElementById('resl').innerHTML = "Количество калорий: " + f + "; Индекс массы тела: " + d
    }

    if (f <= 16)
    alert ("Данное значение ИМТ соответствует: Выраженному дефициту массы тела");
    else if (f > 16 && f < 18.5)
    alert ("Данное значение ИМТ соответствует: Недостаточной массе тела");
    else if (f >= 18.5 && f < 25)
    alert ( "Данное значение ИМТ соответствует: Нормальной массе тела");
    else if (f >= 25 && f < 30)
    alert ( "Данное значение ИМТ соответствует: Избыточной массе тела (предожирение)");
    else if (f >= 30 && f < 35)
    alert ( "Данное значение ИМТ соответствует: Ожирению 1-ой степени");
    else if (f >= 35 && f < 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 2-ой степени");
    else if (f > 40)
    alert ( "Данное значение ИМТ соответствует: Ожирению 3-ой степени");

    var d = 66.5+(13.75*b)+(5.003*c) - (6.775 * a);
    var f = b / ((c / 100) * (c / 100));
}
