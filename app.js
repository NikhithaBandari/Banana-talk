var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    var encodedURI = encodeURI(input);
    return `${serverURL}?text=${encodedURI}`;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server");
}

function clickEventHanlder(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;}
    )
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHanlder);
