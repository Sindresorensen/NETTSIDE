
// Snapbilder - zoom: 

var black = document.getElementById("blackBackground");
var blackImage = document.getElementById("img1");
var scTekst = document.getElementById("scTekst");
var imgE = document.getElementById("Emil_sc");
var imgM = document.getElementById("Marcus_sc");
var imgS = document.getElementById("Sindre_sc");

function zoom() {

    black.style.display = "block";

    blackImage.src = this.src;

    scTekst.innerHTML = this.alt;
}

imgE.onclick = imgM.onclick = imgS.onclick = zoom;

var close = document.getElementsByClassName("close") [0];

function closeButton() {

    black.style.display = "none";

}

close.onclick = blackImage.onclick = closeButton;

var snapList = document.getElementById("snapList");

function snapZoom() {

    black.style.display = "block";

    blackImage.src = "Pictures/Gutta.png";

    scTekst.innerHTML = "emilnick98 | marcusands | sindrus99";
}

snapList.onclick = snapZoom;


// Google maps: 

function myMap(){

    var location = {lat: 63.4090692, ing: 10.3977139};
    var map = new google.maps.Map(document.getElementById("googleMaps"), {
    zoom: 4,
    center: location,
    });
    
    var mapProp = {
        center: new google.maps.LatLng(51.508742,-0.120850), zoom: 5,
    };

    
}