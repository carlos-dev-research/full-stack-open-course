import { useState } from 'react'

const NewContact = ({addPerson}) =>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const newPerson = {name: newName, number: newNumber}
        addPerson(newPerson)
    } 
    
    return (
        <div>
            <h1>Add New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>name:<input value={newName} onChange={e=> setNewName(e.target.value)}/> </div>
                <div>number: <input value={newNumber} onChange={e=> setNewNumber(e.target.value)}/></div>
                <div> <button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default NewContact;