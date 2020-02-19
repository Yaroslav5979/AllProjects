function getId(a) {
    return document.getElementById(a);
}
getId('editBtn').onclick = function () {
    getId('editText').style.display = 'block';
    getId('text').value = getId('box1').innerHTML;
    getId('styleText').style.display = 'none';
}
getId('saveBtn').onclick = function () {
    getId('box1').innerHTML = getId('text').value;
    getId('editText').style.display = 'none';
    getId('text').value = "";
}
getId('styleBtn').onclick = function () {
    getId('editText').style.display = 'none';
    getId('styleText').style.display = 'block';
}
getId('radioIq').onclick = function () {
    getId('box1').style.fontSize = '12px';
}
getId('radioIw').onclick = function () {
    getId('box1').style.fontSize = '14px';
}
getId('radioIe').onclick = function () {
    getId('box1').style.fontSize = '16px';
}
getId('radioIr').onclick = function () {
    getId('box1').style.fontSize = '18px';
}
getId('radioIt').onclick = function () {
    getId('box1').style.fontSize = '20px';
}
getId('newRoman').onclick = function () {
    getId('box1').style.fontStyle = 'italic ';
}
let f1 = document.forms.f1;
f1.changeText.addEventListener('change', function () {
    for (i = 0; i < f1.changeText.length; i++) {
        if (f1.changeText.options[i].selected) {
            getId("box1").style.fontFamily = this.value;
        }
    }
})
getId('colorText').onclick = function () {
    getId('textColor').style.display = 'flex';
    getId('fonColor').style.display = 'none';
}
getId('color1').onclick = function () {
    getId('box1').style.color = 'aqua';
}
getId('color2').onclick = function () {
    getId('box1').style.color = 'blueviolet';
}
getId('color3').onclick = function () {
    getId('box1').style.color = 'coral';
}
getId('color4').onclick = function () {
    getId('box1').style.color = 'dodgerblue';
}
getId('color5').onclick = function () {
    getId('box1').style.color = 'darkmagenta';
}
getId('color6').onclick = function () {
    getId('box1').style.color = 'deeppink';
}
getId('color7').onclick = function () {
    getId('box1').style.color = 'crimson';
}
getId('color8').onclick = function () {
    getId('box1').style.color = 'forestgreen';
}
getId('color9').onclick = function () {
    getId('box1').style.color = 'darkorange';
}
getId('colorFon').onclick = function () {
    getId('fonColor').style.display = 'flex';
    getId('textColor').style.display = 'none';
}
getId('col1').onclick = function () {
    getId('box1').style.backgroundColor = 'aqua';
}
getId('col2').onclick = function () {
    getId('box1').style.backgroundColor = 'blueviolet';
}
getId('col3').onclick = function () {
    getId('box1').style.backgroundColor = 'coral';
}
getId('col4').onclick = function () {
    getId('box1').style.backgroundColor = 'dodgerblue';
}
getId('col5').onclick = function () {
    getId('box1').style.backgroundColor = 'darkmagenta';
}
getId('col6').onclick = function () {
    getId('box1').style.backgroundColor = 'deeppink';
}
getId('col7').onclick = function () {
    getId('box1').style.backgroundColor = 'crimson';
}
getId('col8').onclick = function () {
    getId('box1').style.backgroundColor = 'forestgreen';
}
getId('col9').onclick = function () {
    getId('box1').style.backgroundColor = 'darkorange';
}
let counter = 1;
getId('textRude').onclick = function () {
    if (counter % 2 == 1) {
        getId('box1').style.fontWeight = 'bolder';
    }
    else {
        getId('box1').style.fontWeight = '';
    }
    counter++
}
let counter2 = 1
getId('textCursive').onclick = function () {
        if (counter2 % 2 == 1) {
            getId('box1').style.fontStyle = 'italic';
        }
        else {
            getId('box1').style.fontStyle = '';
        }
        counter2++
    }
    //  ТАБЛИЦЯ
getId('addBtn').onclick = function () {
    getId('container2').style.display = 'block';
    getId('container').style.display = 'none';
    getId('box5').style.display = 'none';
    getId('box4').style.display = 'block';
}
getId('create').onclick = function () {
    getId('container').style.display = 'block';
    getId('container2').style.display = 'none';
    getId('styleText').style.display = 'none';
    getId('box2').style.display = 'block';
    getId('editText').style.display = 'block';
    getId('box1').style.display = 'block';
}
getId('create').onclick = function () {
    getId('container2').style.display = 'none';
    getId('container').style.display = 'block';
    //    кількість рядків
    let countTr = getId('numberStrings').value;
    //    кількість стовпців
    let countTd = getId('numberColumns').value;
    //    ширина комірки
    let cellWidth = getId('cellWidth').value;
    //    висота комірки
    let cellHeight = getId('cellHeight').value;
    //    товщина
    let widthLines = getId('widthLines').value;
    //    тип лінії
    let typeLines = getId('typeLines').value;
    //    колір лінії
    let colorLines = getId('colorLines').value;
    getId('text').value += "<table style='border:" + widthLines + "px " + typeLines + " " + colorLines + "';>"
    for (let i = 0; i < countTr; i++) {
        getId('text').value += "<tr>";
        for (let j = 0; j < countTd; j++) {
            getId('text').value += "<td style='width: " + cellWidth + "px ; height: " + cellHeight + "px; border:" + widthLines + "px " + typeLines + " " + colorLines + "'>Some text</td>";
        }
        getId('text').value += "</tr>";
    }
    getId('text').value += "</table>";
}
getId('userList').onclick = function () {
    getId('box4').style.display = 'none';
    getId('box5').style.display = 'block';
}
getId('userTable').onclick = function () {
    getId('box4').style.display = 'block';
    getId('box5').style.display = 'none';
}
getId('createList').onclick = function () {
    getId('container2').style.display = 'none';
    getId('container').style.display = 'block';
    //СПИСОК
    //кількість елементів списку
    let nomberItems = getId('nomberItems').value;
    //Тип маркування списку
    let changeText = getId('changeList').value;
    getId('text').value += "<ul type='" + changeText + "'>";
    for (let q = 0; q < nomberItems; q++) {
        getId('text').value += "<li>some text</li>";
    }
    getId('text').value += "</ul>";
}
//window.addEventListener('click', function (event) {
//    if (event.target != getId('color1') && event.target != getId('colorText') && event.target != getId('textColor').children) {
//        getId('textColor').style.display = 'none';
//    }
//})
window.addEventListener('click', function (event) {
    if (event.target != getId('col1') && event.target != getId('col9') && event.target != getId('col8') && event.target != getId('col7') && event.target != getId('col6') && event.target != getId('col5') && event.target != getId('col4') && event.target != getId('col3') && event.target != getId('col2')&& event.target != getId('colorFon') && event.target != getId('fonColor').children) {
        getId('fonColor').style.display = 'none';
    }
})
window.addEventListener('click', function (event) {
    if (event.target != getId('color1') && event.target != getId('colorText') && event.target != getId('color2') && event.target != getId('color3') && event.target != getId('color4') && event.target != getId('color5') && event.target != getId('color6') && event.target != getId('color7') && event.target != getId('color8') && event.target != getId('color9') && event.target != getId('textColor').children) {
        getId('textColor').style.display = 'none';
    }
})