function plus0ne() {
 let modal = document.querySelector("#modal");
  modal.innerHTML = Number(modal.innerHTML) + 1;
}
function plusFive() {
 let modal = document.querySelector("#modal");
 modal.innerHTML = Number(modal.innerHTML) + 5;
}
function plusTen() {
 let modal = document.querySelector("#modal");
 modal.innerHTML = Number(modal.innerHTML) + 10;
}


function checkNumber(){
 if(Number(document.querySelector('#num').value) > 10)
 {
  window.alert("true");
 }else{
  window.alert("false");
 }

}

