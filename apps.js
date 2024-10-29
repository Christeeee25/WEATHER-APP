let valuesearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main')
let form = document.querySelector('form');
let result = document.querySelector('result')
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(valuesearch.value !=''){
        searchWeather()
    }
})
let id = 'c6c2d9f1b9f355a8084a32e4d271ab20'
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}`;
const searchWeather = ()=>{
    fetch(url + '&q=' + valuesearch.value)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name; 
            city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png'
            temperature.querySelector('img').src='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'
            temperature.querySelector('figcaption').innerHTML = `<span><h1>${data.main.temp} <sup>0</sup></h1></span>`;
            description.innerHTML = `<h1>${data.weather[0].description}</h1>`;
            clouds.innerHTML = `<li>
                    <span>Clouds</span>
                    <i class="fa fa-cloud" aria-hidden="true"></i>
                    <span id="clouds">${data.clouds.all}</span>%   
                </li>`;
            humidity.innerHTML= `
                    <span>Humidity</span>
                    <i class="fa fa-tint" aria-hidden="true"></i>
                    <span id="humidity">${data.main.humidity}</span>%`;
            pressure.innerHTML= `<span>Pressure</span>
                    <i class="fa fa-balance-scale" aria-hidden="true"></i>
                    <span id="pressure">${data.main.pressure}</span>hPa`;
        } else{
            result.innerHTML= alert('Invalid country or city name😲');
            
        }
        // valueSearch.value='';
    })

}
