import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '0123456789' }]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber
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
            <h2>Phonebook</h2>
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
                    persons.map((person) => {
                        return <p key={person.name}>{person.name} - {person.number}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default App;
