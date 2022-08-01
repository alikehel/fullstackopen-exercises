const AddNumber = ({ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
        <>
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
        </>
    )
}

export default AddNumber
