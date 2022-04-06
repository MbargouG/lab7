function init() {
    //add your javascript between these two lines of code
    function alertFunction() {
        alert("Mbargou Gueye: ' + inputForm.value");
    }
    function setText(){
        var outputText = document.getElementById('textoutput');
        outputText.innerHTML = "<h2>" = inputForm.value + "</h2>";
    }
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', alertFunction);

}
window.addEventListener('load', init);