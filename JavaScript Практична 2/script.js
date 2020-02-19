function getId(a) {
    return document.getElementById(a);
}
getId('edit').onclick = function () {
    getId('menu').style.display = 'none';
    getId('text').style.display = 'none';
    getId('menu2').style.display = 'block';
    getId('bgMenu').style.display = 'block';
    getId('texteditor').style.display = 'block';
}
getId('crTable').onclick = function () {
    getId('tableStile').style.display = 'flex';
    getId('list3').style.display = 'block';
}
getId('create').onclick = function () {
    getId('tableStile').style.display = 'none';
    getId('list3').style.display = 'none';
    let countTr = getId('numberStrings').value;
    //    кількість стовпців
    let cellWidth = getId('cellWidth').value;
    //    ширина комірки
    let Cellsp = getId('Cellsp').value;
    //    висота комірки
    let thicknBorder = getId('thicknBorder').value;
    //    товщина
    let countTd = getId('numberColumns').value;
    //    тип лінії
    let cellHeight = getId('cellHeight').value;
    //    колір лінії
    let colorLiness = getId('border_Color').value;
    getId('texteditor').value += "<table width=" + cellWidth + "px height=" + cellHeight + " cellspacing=" + Cellsp + " border=" + thicknBorder + " borderColor=" + colorLiness + "';>"
    for (let i = 0; i < countTr; i++) {
        getId('texteditor').value += "<tr>";
        for (let j = 0; j < countTd; j++) {
            getId('texteditor').value += "<td>some text</td>";
        }
        getId('texteditor').value += "</tr>";
    }
    getId('texteditor').value += "</table>";
}
getId('crList').onclick = function () {
    getId('list4').style.display = 'block';
}
getId('reset1').onclick = function () {
    getId('numberStrings').value = '';
    getId('cellWidth').value = '';
    getId('Cellsp').value = ''
    getId('thicknBorder').value = ''
    getId('numberColumns').value = ''
    getId('cellHeight').value = ''
    getId('border_Color').value = ''
}
getId('reset2').onclick = function () {
    getId('typeMark').value = '';
    getId('items').value = '';
}
getId('create2').onclick = function () {
        getId('list4').style.display = 'none';
        //        getId('list4').display = 'block';
        let ollist = getId('ol_list').value;
        let typeMark = getId('typeMark').value;
        let itemsList = getId('items').value;
        getId('texteditor').value += "<ol type=" + typeMark + ">"
        for (let t = 0; t < itemsList; t++) {
            getId('texteditor').value += "<li " + itemsList + "'> some text </li>";
        }
        getId('texteditor').value += "</ol>";
    }
    // getId('text').value += "<ul type='" + changeText + "'>";
    //    for (let q = 0; q < nomberItems; q++) {
    //        getId('text').value += "<li>some text</li>";
    //    }
    //    getId('text').value += "</ul>";
getId('save').onclick = function () {
    getId('menu').style.display = 'block';
    getId('menu2').style.display = 'none';
    getId('text').style.display = 'block';
    getId('texteditor').style.display = 'none';
    getId('textR').innerHTML = getId('texteditor').value;
    getId('list4').style.display = 'none';
}
let counter = 1;
getId('rude').onclick = function () {
    if (counter % 2 == 1) {
        getId('text').style.fontWeight = 'bold';
    }
    else {
        getId('text').style.fontWeight = 'normal';
    }
    counter++;
}
let counter2 = 1;
getId('inclined').onclick = function () {
    if (counter2 % 2 == 1) {
        getId('text').style.fontStyle = 'oblique';
    }
    else {
        getId('text').style.fontStyle = '';
    }
    counter2++
}
let counter3 = 1;
getId('underlined').onclick = function () {
        if (counter3 % 2 == 1) {
            getId('text').style.textDecoration = 'underline';
        }
        else {
            getId('text').style.textDecoration = '';
        }
        counter3++
    }
    //    let f1 = document.forms.f1;
    //    f1.colorText.addEventListener('change', function () {
    //        for (i = 0; i < f1.colorText.length; i++) {
    //            if (f1.colorText.options[i].selected) {
    //                getId("text").style.color = this.value;
    //            }
    //        }
    //    })
function wrapText(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontSize = listValue;
}

function styleText(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
}
getId('textColor').onclick = function () {
    getId('colorText').style.display = 'flex';
}
getId('bgImg').onclick = function () {
    getId('boxImg').style.display = 'block';
    getId('colorBg').style.display = 'flex';
    getId('pictureBg').style.display = 'none';
    getId('changeColor').style.display = 'none';
    getId('changeImages').style.display = 'block';
}
getId('changeColor').onclick = function () {
    getId('colorBg').style.display = 'flex';
    getId('pictureBg').style.display = 'none';
    getId('changeColor').style.display = 'none';
    getId('changeImages').style.display = 'block';
}
getId('changeImages').onclick = function () {
    getId('colorBg').style.display = 'none';
    getId('pictureBg').style.display = 'flex';
    getId('changeImages').style.display = 'none';
    getId('changeColor').style.display = 'block';
}
let foo = document.getElementsByClassName('color_text');
for (let i = 0; i < foo.length; i++) {
    foo.item(i).onclick = function () {
        getId('text').style.color = this.getAttribute('value');
    }
}
let tovs = document.getElementsByClassName('color_bg');
for (let i = 0; i < tovs.length; i++) {
    tovs.item(i).onclick = function () {
        getId('text').style.backgroundColor = this.getAttribute('value');
    }
}
window.addEventListener('click', function (event) {
        if (event.target != getId('color1') && event.target != getId('color2') && event.target != getId('color3') && event.target != getId('color4') && event.target != getId('color5') && event.target != getId('color6') && event.target != getId('color7') && event.target != getId('color8') && event.target != getId('color9') && event.target != getId('textColor') && event.target != getId('colorText').children) {
            getId('colorText').style.display = 'none';
        }
    })
    //window.addEventListener('click', function (event){
    //    if(event.target !=document.getElementsByClassName('picturesBg').children){
    //         getId('boxImg').style.display = 'none';
    //    }
    //})
window.addEventListener('click', function (event) {
    if (event.target != getId('picture') && event.target != getId('picture9') && event.target != getId('picture8') && event.target != getId('picture7') && event.target != getId('picture6') && event.target != getId('picture5') && event.target != getId('picture4') && event.target != getId('picture3') && event.target != getId('picture2') && event.target != getId('changeImages') && event.target != getId('bgcolor1') && event.target != getId('bgcolor2') && event.target != getId('bgcolor3') && event.target != getId('bgcolor4') && event.target != getId('bgcolor5') && event.target != getId('bgcolor6') && event.target != getId('bgcolor7') && event.target != getId('bgcolor8') && event.target != getId('bgcolor9') && event.target != getId('changeColor') && event.target != getId('colorBg') && event.target != getId('apply') && event.target != getId('imageLoader') && event.target != getId('changeColor') && event.target != getId('bgImg') && event.target != getId('boxImg').children) {
        getId('boxImg').style.display = 'none';
    }
})
window.addEventListener('click', function (event) {
    if (event.target != getId('numberStrings') && event.target != getId('reset1') && event.target != getId('list1') && event.target != getId('thicknBorder') && event.target != getId('crTable') && event.target != getId('cellWidth') && event.target != getId('Cellsp') && event.target != getId('create') && event.target != getId('numberColumns') && event.target != getId('cellHeight') && event.target != getId('border_Color') && event.target != getId('reset') && event.target != getId('crTable') && event.target != getId('thicknBorder').children) {
        getId('tableStile').style.display = 'none';
        getId('list3').style.display = 'none';
    }
})

function changeBg(img) {
    getId('text').style.backgroundImage = `url(${img.src})`;
}
///\\\ Праворуч Центр Ліворуч ///\\\
getId('textLeft').onclick = function () {
    getId('text').style.textAlign = 'left';
    getId('textR').style.marginRight = 'auto';
    getId('textR').style.marginLeft = '';
}
getId('textCenter').onclick = function () {
    getId('text').style.textAlign = 'center';
    getId('textR').style.margin = 'auto';
}
getId('textRight').onclick = function () {
    getId('text').style.textAlign = 'Right';
    getId('textR').style.marginLeft = 'auto';
    getId('textR').style.marginRight = '';
}
let imageLoader = document.getElementById('imageLoader');
document.getElementById('apply').onclick = function () {
    const fileUrl = window.URL.createObjectURL(imageLoader.files[0]);
    console.log(fileUrl);
    getId('text').style.backgroundImage = `url(${fileUrl})`
}

function ValidatePassword() {

  var password = prompt("Please enter password to proceed", "");

  if (password == "Admin Password") {
    return true;
  }
  return false;
}