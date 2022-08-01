import { useState } from 'react';
import Search from "./components/Search";
import AddNumber from "./components/AddNumber";
import Numbers from "./components/Numbers";


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [searchedPersons, setSearchedPersons] = useState([]);
    const [searching, setSearching] = useState(false);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchedPersons(persons.filter((person) => {
            return person.name.toLowerCase().includes(e.target.value.toLowerCase())
        }))
        setSearching(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        const personExists = persons.some((person) => {
            return newPerson.name === person.name
        })

        if (personExists) {
            alert(`${newName} already exists`)
        } else {
            setPersons([...persons, newPerson])
            setNewName('')
            setNewNumber('')
            setSearching(false)
        }
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Search handleSearchChange={handleSearchChange} />
            <AddNumber
                handleSubmit={handleSubmit}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <Numbers searching={searching} persons={persons} searchedPersons={searchedPersons} />
        </div>
    );
};

export default App;
