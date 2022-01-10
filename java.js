function getValue() {
    var inputb = document.getElementById("in").value;
    var inputa = document.getElementById("im").value;
    if (inputb === "ad" && inputa === "ic"){
        window.location="page connectionreussi.html"
    }
    else{
        window.location="erreur.html"
    }
}