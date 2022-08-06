const Country = ({ country, handleClick }) => {
	return (
		<div>
			<label htmlFor="show-details">{country.name.common}: </label>
			<button onClick={() => handleClick([country])} id={'show-details'}>
				Show Details
			</button>
		</div>
	);
};

export default Country;
