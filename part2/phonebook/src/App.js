import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
    const [newName, setNewName] = useState('');

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPerson = {
            name: newName
        }

        const personExists = persons.some((person) => {
            return newPerson.name === person.name
        })

        if (personExists) {
            alert(`${newName} already exists`)
        } else {
            setPersons([...persons, newPerson])
            setNewName('')
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {
                    persons.map((person) => {
                        return <p key={person.name}>{person.name}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default App;
