function ResultCard({day}){
 return(
    <div className="DayWeather" key={day.day}>
        <div className="City">{day.day}</div>
        <img src={require(`../images/${day.icon}.svg`)} />
        <div class="City">{day.temp}°C</div>
    </div>
 )   
}

export default ResultCard;