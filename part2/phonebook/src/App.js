import { useState } from 'react';

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
        }
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <h2>Search</h2>
            <input placeholder='Search Name' onChange={handleSearchChange} />
            <h2>Add Number</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {
                    !searching
                        ?
                        persons.map((person) => {
                            return <p key={person.name}>{person.name} | {person.number}</p>;
                        })
                        :
                        searchedPersons.map((person) => {
                            return <p key={person.name}>{person.name} | {person.number}</p>;
                        })
                }
            </div>
        </div>
    );
};

export default App;
