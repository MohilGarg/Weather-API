function getDetails(place){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("name").innerHTML = abc.name)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("country").innerHTML = abc.sys.country)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("temperature").innerHTML = parseInt(abc.main.temp-273.15)+"°C")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("latitude").innerHTML = abc.coord.lat)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("longitude").innerHTML = abc.coord.lon)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById("windspeed").innerHTML = abc.wind.speed+" km/h")

}

function callMe(){
    var myplace = document.getElementById('place').value;
    getDetails(myplace)
    console.log("working")
}
