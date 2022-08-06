import axios from 'axios';
import { useState, useEffect } from 'react';

const CountryWeather = ({ country }) => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`).then((response) => {
			setWeather(response.data);
		});
	}, [country.latlng]);

	return (
		weather && (
			<div>
				<h2>Weather In {weather.name}</h2>
				<p>Temp: {weather.main.temp} Celisius</p>
				<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
				<p>Wind: {weather.wind.speed}</p>
			</div>
		)
	);
};

export default CountryWeather;
