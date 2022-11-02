function showModal(){
  console.log("showModal()の実行テスト");
  let modal = document.querySelector("#modal");
  modal.innerHTML = "ボタンが押されました";
}


function changeRed() {
  let modal2 = document.querySelector("#modal2");
  modal2.style.backgroundColor = "red";
}
function changeYellow() {
  let modal2 = document.querySelector("#modal2");
  modal2.style.backgroundColor = "yellow";
}
function changeGreen() {
  let modal2 = document.querySelector("#modal2");
  modal2.style.backgroundColor = "green";
}


function appendCircle() {
  let modal3 = document.querySelector("#modal3");
  modal3.innerHTML = modal3.innerHTML + "○";
  //modal3.innerHTML += "○"; でもいい
  //modal3.append("○"); でもいい

}

function appendCross() {
  let modal3 = document.querySelector("#modal3");
  modal3.innerHTML = `${modal3.innerHTML}✕`;
}