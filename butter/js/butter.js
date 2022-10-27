
let t2 = document.getElementById('t2');


let identified = false;
let buttpoints = 0;


function found(){
identified = true;
buttpoints = 1;
console.log(identified);
alert('butterfly found!');
}


if (identified == true) {
    t2.style.display = 'block';
    t2.innerHTML = "Congrats! You identified hidden element!";
}
if (identified == false) {
    t2.style.display = 'none';
}
//if (identified == false) {
   // t2.innerHTML = "text testing....";
//}


console.log(buttpoints);
console.log(identified);
