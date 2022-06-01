// var city
// function searchCity() {
//   city = document.getElementById('searchCity').value
//   console.log("city" ,city);
// }
var submitBtn=document.querySelector('form')


var button = document.getElementById("logninbtn")
var searchCity = document.getElementById("CityName")

submitBtn.addEventListener("submit", (e)=>{
  e.preventDefault()

  const value = searchCity.value

  console.log(value);


  fetch('/search',{
    method: 'POST',
    headers:{
       "Content-Type":"application/json"
    },
    body: JSON.stringify({value})
  })
  .then((res)=> res.json())
  .then((res)=>{
    console.log('response: ',res)
    showData(res)
  }).catch((err) =>{
    //  console.log(err.message);
    //  const alerts=document.getElementById()
  })


})



function showData(res){
  console.log("res", res);
  const errors =document.getElementById("alert")
  const cityName = document.getElementById("cityName")
  const wicon = document.getElementById("wicon")
  const minTemp = document.getElementById("minTemp")
  const maxTemp = document.getElementById("maxTemp")
  const windSpeed = document.getElementById("windSpeed")
  const humidity = document.getElementById("humidity")
  const weatherDesc=document.getElementById('weatherDesc')

  console.log("res.msg", res.message);

 

  if(res.message){
    errors.innerHTML = res.message
  //  cityName.innerHTML = "&nbsp;"
  // cityName.remove()
  minTemp.innerHTML = "&nbsp;"
  maxTemp.innerHTML =  "&nbsp;"
  windSpeed.innerHTML = "&nbsp;"
  humidity.innerHTML = "&nbsp;"
  weatherDesc.innerHTML = "&nbsp;"
  wicon.setAttribute("src","")

  }



  cityName.innerHTML = `city : ${res.name}`
  
  minTemp.innerHTML = `Min.Temp : ${res.main.temp_min}`
  maxTemp.innerHTML =  `Max Temp : ${res.main.temp_max}` 
  windSpeed.innerHTML = `Wind Speed : ${res.wind.speed }`
  humidity.innerHTML = `Humidity  : ${res.main.humidity} `
  weatherDesc.innerHTML = `weather:  ${res.weather[0].description} `
  errors.innerHTML= ""


  const iconCode = res.weather[0].icon
  const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  wicon.setAttribute("src", iconUrl)

  
}



































    // var city = document.getElementById("city")
    // var search = document.getElementById("search")
    // var value

    // search.addEventListener('click',(event) => { 
    //   value = city.value
    //   console.log("city", value);
    // })



    // const obj ={
    //   city:value
    // }



    // fetch('/',{
    //   method: 'POST',
    //   body: JSON.stringify(obj)

    // } )


