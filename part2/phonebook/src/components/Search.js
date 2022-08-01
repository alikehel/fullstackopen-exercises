const Search = ({ handleSearchChange }) => {
    return (
        <>
            <h2>Search</h2>
            <input placeholder='Search Name' onChange={handleSearchChange} />
        </>
    )
}

export default Search
