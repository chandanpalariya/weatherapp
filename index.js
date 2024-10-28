const button=document.getElementById("Search-button");
const input=document.getElementById("city-input");
const cityname=document.getElementById("city-name");
const citytime=document.getElementById("city-time");
const citytemp=document.getElementById("city-temp");
 async function getdata(cityname){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=f6a98d1da8d14926ae771240241009&q=${cityname}&aqi=yes`);

  return await promise.json();
}

button.addEventListener('click',async()=>{
    const value=input.value;
   const result=  await getdata(value)
   
   cityname.innerText=`${result.location.name},${result.location.region} -${result.location.country}`
   citytime.innerText=`${result.location.localtime}`
   citytemp.innerText=result.current.temp_c;

});

// http://api.weatherapi.com/v1/current.json?key=f6a98d1da8d14926ae771240241009&q=London&aqi=yes
