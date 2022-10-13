const API_KEY="cb1a4eb3074029f696fa96b23c570ea8"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(respence => respence.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText= `위치 : ${data.name}`
        city.innerText= `날씨 : ${data.weather[0].main} /온도 : ${data.main.temp}℃`;
    });
}
function onGeoError(){
    alert("Can't find you. NO weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);