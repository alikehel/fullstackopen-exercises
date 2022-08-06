// import { useState } from 'react';
import Country from './Country';
import CountryDetailed from './CountryDetailed';
import CountryWeather from './CountryWeather';

const Countries = ({ searchedCountries, setSearchedCountries }) => {
	// const [detailed, setDetailed] = useState(0);

	const handleClick = (country) => {
		setSearchedCountries(country);
	};

	return (
		<div>
			{searchedCountries.length > 10 ? (
				<p>More Than 10</p>
			) : searchedCountries.length === 1 ? (
				<>
					<CountryDetailed searchedCountries={searchedCountries} />
					<CountryWeather country={searchedCountries[0]} />
				</>
			) : (
				searchedCountries.map((country, index) => {
					return <Country key={index} country={country} handleClick={handleClick} />;
				})
			)}
		</div>
	);
};

export default Countries;

/* : (
				<CountryDetailed searchedCountries={searchedCountries} />
			)} */
