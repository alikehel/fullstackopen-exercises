const CountryDetailed = ({ searchedCountries }) => {
	return (
		<div>
			<h1>{searchedCountries[0].name.common}</h1>
			<p>Capital: {searchedCountries[0].capital}</p>
			<h2>languages</h2>
			<ul>
				{Object.values(searchedCountries[0].languages).map((lang, index2) => {
					return <li key={index2}>{lang}</li>;
				})}
			</ul>
			<img src={searchedCountries[0].flags.png} alt={'flag'} />
		</div>
	);
};

export default CountryDetailed;
