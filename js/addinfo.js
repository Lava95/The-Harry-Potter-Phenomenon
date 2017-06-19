function init()
{
	age=document.getElementById("age");
	b0=document.getElementById("b0");
	b1=document.getElementById("b1");
	b2=document.getElementById("b2");
	b3=document.getElementById("b3");
	b4=document.getElementById("b4");
	b5=document.getElementById("b5");
	b6=document.getElementById("b6");
	b7=document.getElementById("b7");
	
	m0=document.getElementById("m0");
	m1=document.getElementById("m1");
	m2=document.getElementById("m2");
	m3=document.getElementById("m3");
	m4=document.getElementById("m4");
	m5=document.getElementById("m5");
	m6=document.getElementById("m6");
	m7=document.getElementById("m7");
	m8=document.getElementById("m8");
	
	
}
var x = document.getElementById("demo");
function getlocation()
{
	


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
		console.log(showPosition.coords.latitude);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
