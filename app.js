var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
function clickEventHanlder(){
    console.log("clicked!");
    console.log("input", txtInput.value);
};
btnTranslate.addEventListener("click", clickEventHanlder);
