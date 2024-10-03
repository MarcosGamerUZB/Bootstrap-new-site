function show(){
    let isClosed = document.getElementById('close').innerHTML;
    if(isClosed == 0){
        document.getElementById("hide-own").style.display = 'block';
        document.getElementById("arrow-own").style.rotate = '180deg';
        document.getElementById('closeText').innerHTML = 'Показать меньше';
        document.getElementById('close').innerHTML = 1;
    }
    else{
        document.getElementById("hide-own").style.display = 'none';
        document.getElementById('arrow-own').style.rotate = '0deg';
        document.getElementById('closeText').innerHTML = 'Показать больше'
        document.getElementById('close').innerHTML = 0;
    }
}
function showFooter(){
    let isClosed = document.getElementById('open').innerHTML;
    if(isClosed == 0){
        document.getElementById("hide-mine").style.display = 'block';
        document.getElementById("arrowFooter").style.rotate = '180deg';
        document.getElementById('open').innerHTML = 1;
    }
    else{
        document.getElementById("hide-mine").style.display = 'none';
        document.getElementById('arrowFooter').style.rotate = '0deg';
        document.getElementById('open').innerHTML = 0;
    }
}
function firstCheckBox(){
    let isChecked = document.getElementById('checkTwo').checked;
    if(isChecked == true){
        document.getElementById('checkTwo').checked = false;
    }
}
function secondCheckBox(){
    let isChecked = document.getElementById('checkOne').checked;
    if(isChecked == true){
        document.getElementById('checkOne').checked = false;
    }
}