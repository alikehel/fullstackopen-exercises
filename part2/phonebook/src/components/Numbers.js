const Numbers = ({searching,persons,searchedPersons}) => {
    return (
        <>
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
        </>
    )
}

export default Numbers
