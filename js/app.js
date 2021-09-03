const API_KEY = `39dd762bdeafd7fb22d24f33fc3e22fd`

const searchTemprature = () =>{
  const city = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
 
  fetch(url)
   .then(res => res.json())
   .then(data => displayTemprature(data))

}
 
//f-2
const setInnerText = (id,text) =>{
  document.getElementById(id).innerText = text;
}

// f-1
const displayTemprature = temprature =>{
  setInnerText('city',temprature.name)
  setInnerText('temprature',temprature.main.temp)
  setInnerText('condation',temprature.weather[0].main)
//   console.log(temprature);

//set wather icon
const url = `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`
const imgIcon = document.getElementById('weather-icon');
imgIcon.setAttribute('src', url);
}