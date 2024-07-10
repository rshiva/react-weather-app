import { useState } from "react";

function SearchForm({weatherResponse,setweatherResponse}){
    const [citySearch, setCitySearch] = useState('');
    

    function updateSearch(event){
        setCitySearch(event.target.value)
    }

    function processWeatherData(apiResponse) {
        const result = [];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const processedDays = new Set();

        apiResponse.list.forEach((item) => {
            
            const date = new Date(item.dt * 1000);
            const dayName = date.getDay() === today.getDay() ? "today" : days[date.getDay()];

            if (!processedDays.has(dayName) && processedDays.size < 5) {
                result.push({
                    day: dayName,
                    temp: Math.round(item.main.temp - 273.15).toString(), // Convert Kelvin to Celsius
                    description: item.weather[0].description,
                    icon: item.weather[0].icon,
                    city:  apiResponse.city.name 

                });
                processedDays.add(dayName);
            }
        });

        return result;
    }


    async function handleSubmit(event){
        event.preventDefault();
        console.log(process.env)
        const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&APPID=${process.env.REACT_APP_API_KEY}`)
        const apiResponse = await request.json()
        const weatherForecast = processWeatherData(apiResponse);
        const newWeatherForecast = [...weatherForecast ]
        setweatherResponse(newWeatherForecast)
        setCitySearch('')
}
    return(
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input name="search"
                placeholder="    Enter a city"
                value={citySearch}
                className="SearchInput"
                onChange={ updateSearch }/>
            </form>
        </div>
    )
}
export default SearchForm