const vietos = document.querySelector('ul');
const button1 = document.querySelector('#rodyti');
button1.addEventListener('click', rodyti)
const button2 = document.querySelector('#maisyti');
button2.addEventListener('click', maisymas)

let foto = ['0', '1', '2', '3', '4', '5', '6', '7'];

function rodyti() {

    for (let i = 0; i < foto.length; i++) {

        const vieta = document.createElement('li');
        const fotos = document.createElement("img");
        fotos.src='img/'+foto[i]+'.png';
        vietos.appendChild(vieta);
        vieta.appendChild(fotos);
    }
}
function displayNone() {
    let x = document.getElementById('#rodyti');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function maisymas() {
    let naujas = foto
    naujas.sort(function () {
        return 0.2 - Math.random()
    });

    const maisyt = document.querySelectorAll('img')
    for (let i = 0; i < naujas.length; i++) {
        maisyt[i].src='img/'+naujas[i]+'.png'}
}






















/*
const defaultImage = "img/default.png";

keisti = document.querySelectorAll("img")

keisti.ondblclick = function (e) {
    e.target.src = defaultImage;
}



console.log(keisti)

















/*

const tasks = document.querySelector('ul');

var png = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const addTask = document.body.getElementsByTagName('png');

button.addEventListener('click', changeColor)
console.log(changeColor)
function changeColor() {
    const task = document.createElement('li');
    task.textContent=addTask.value;
    tasks.appendChild(task);
}

hide.addEventListener('click', hide)
function display() {
    const lastTask = document.querySelector('click', display());
    console.log(display())
    tasks.hidePopup(lastTask)
}

*/



























/*function find() {
    const x = document.getElementById("x");
    const y = document.getElementById("y");
    var str = "<table>";
    for (var i=0; i<x.value; i++){
        str +="<tr>";
        for (var j=0; j<y.value; j++) {
            str +="<td>"+j+"</td>";
        }
        str+="</tr>";
    }
    str+="</table>";
    document.getElementById("msg").innerHTML=str;
}
*/
