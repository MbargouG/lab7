function init() {
    //add your javascript between these two lines of code
    function alertFunction() {
        alert("Mbargou Gueye: ' + inputForm.value");
    }
    function setText(){
        var outputText = document.getElementById('textoutput');
        outputText.innerHTML = "<h2>" = inputForm.value + "</h2>";
    }
    var alertDiv = document.getElementById('textoutput');
    var inputForm = document.getElementById('entrybutton');
    alertDiv.addEventListener('click', alertFunction);
    alertDiv.addEventListener('click',setText)
}
window.addEventListener('load', init);