var api_url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
var API = ',us&appid=e1073ff107524f3183db96a3cc8ad5e3';
var myJson={};
var zipZip = document.getElementById('zipCode');
const button = document.querySelector('#submit');
var city = document.getElementById('name');
var temp = document.getElementById('temp');
var condition = document.getElementById('condition');
var icon = 'http://openweathermap.org/img/wn/';
var list ='@2x.png';
var seasonEl = document.getElementById('season');

button.addEventListener('click', zipRequest);

async function getWeatherData(zip_code_from_form) {
    // removed spaces from user code input
    zip_code_from_form = zip_code_from_form.replace(/\s/g, '');
    var api_link = api_url + zip_code_from_form + API;
    console.log(api_link);

    fetch(api_link)
    .then(function(response) {
    if (!response.ok) {
        alert("Check YO DIGITS");
        throw new Error('HTTP error, status =' + response.status);
    }
    return response.json();
    })
    .then(function(response) {
        myJson = response;
        console.log(JSON.stringify(myJson));
        updateCity(myJson['name']);
        //zipZip.innerHTML = myJson["name"];
        updateTemp(myJson['main'].temp);
        updateCondition(myJson["weather"][0].description);
        imageCondition(myJson["weather"][0].icon);
    });

    
}

function zipRequest() {
    console.log("zipRequest")
     // make sure the value is proper
    getWeatherData(zipZip.value);
}

function updateCity(str) {
    // update city html element with str
    city.textContent = str;

}
// console.log(updateCity)

function updateTemp(str) {
    // update temp html element with str
    temp.textContent = str;
    celsius(str);

}

function updateCondition(str) {
    // update Condition html with str
    condition.textContent = str;
}

function celsius(updateCelsius) {
    var newCelsius = Math.round((updateCelsius - 273.15));
    console.log(newCelsius);
    fahrenheit(newCelsius);
    document.getElementById('Celsius').innerHTML = newCelsius;
}

function fahrenheit(newCelsius) {
    var newFahrenheit = Math.round(((newCelsius) * 9/5) + 32);
    console.log(newFahrenheit);
    document.getElementById('Fahrenheit').innerHTML = newFahrenheit;
}

function imageCondition (updateimage) {
    var imageLink = icon + updateimage + list;
    // upate html src
    seasonEl.src = imageLink;
}