import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([])

  const handleChange = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
    console.log(searchValue, search)
    // const filteredCountries = countries.filter((country) => {
    //   return country.name.common.toLowerCase().includes(search.toLowerCase())
    // })
    // setSearchedCountries(filteredCountries)
    // console.log(filteredCountries)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      const data = await response.data
      // console.log(data[0])
      setCountries(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })
    setSearchedCountries(filteredCountries)
    console.log(filteredCountries)
  }, [search])

  return (
    <>
      <div>
        <label>Find Countries: </label>
        <input value={search} onChange={handleChange}></input>
      </div>
      <div>
        {
          searchedCountries &&
          searchedCountries.map((country, index) => {
            return <p key={index}>{country.name.common}</p>
          })
        }
      </div>
    </>
  );
}

export default App;
