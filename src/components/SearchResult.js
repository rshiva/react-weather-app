import ResultCard from "./ResultCard"

function SearchResult({weatherResponse}){
    const nextdays = weatherResponse.slice(1)

    
        if(weatherResponse === undefined){
            return(<p>City not found</p>)
        }else{
            return(
            <div className="WeatherWindow">
                <div className="WeatherIcon">
                    <img src={
                    (weatherResponse.length > 0)
                        ? require(`../images/${weatherResponse[0].icon}.svg`)
                        : require("../images/01d.svg")
                    }
                    height="350" 
                    width="350" />
                </div>
                <div className="WeatherData">
                    <h2>Today</h2>
                    <h1 className="City">{weatherResponse[0].city}</h1>
                    <h2>Tempature: {weatherResponse[0].temp}°C</h2>
                    <h2>{weatherResponse[0].description}</h2>
                </div>
                <br/>
                <div className="NextWeatherWindows">
                    {nextdays.map((day) =>{
                        return <ResultCard day = {day}/>
                    })}
                </div>
        </div>
        )}
    
    
}

export default SearchResult