var api_url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
var API = ',us&appid=e1073ff107524f3183db96a3cc8ad5e3';
var myJson={};
var zipZip = document.getElementById('zipCode');
const button = document.querySelector('#submit');

button.addEventListener('click', zipRequest);

async function getWeatherData(zip_code_from_form) {
    var api_link = api_url + zip_code_from_form + API;
    console.log(api_link);

    fetch(api_link)
    .then(function(response) {
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
    }
    return response.json();
    })
    .then(function(response) {
        myJson = response;
        console.log(JSON.stringify(myJson));
        updateCity(myJson['name']);
        zipZip.innerHTML = myJson["name"];
        updateTemp(myJson['temp']);
        temp.innerHTML = myJson["main.temp"];
    });

    
}

function zipRequest() {
    console.log("zipRequest")
    
    // make sure the value is proper
    getWeatherData(zipZip.value);
}

function updateCity(str) {
    // update city html element with str
    var city = document.getElementById('name');
    city.textContent = str;

}
console.log(updateCity)

function updateTemp(str) {
    // update city html element with str
    var temp = document.getElementById('main.temp');
    temp.textContent = str;

}


