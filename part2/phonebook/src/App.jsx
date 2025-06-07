import { useState } from 'react'
import NewContact from './NewContact'
import ContactList from './ContactList'
import FilterBar from './FilterBar'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number:'040-123456', id:1}
  ]) 

  const [displayedContacts, setDisplayedContacts] = useState(persons)
  const [filterKey, setFilterKey] = useState('')


  const addPerson = ({name, number}) => {
    // Check if the name is already registered
    const exists = persons.some(person => person.name === name)
    if (exists){
      alert(`${name} is already added to phonebook`)
      return
    }
    const newList = persons.concat({name:name, number:number, id:persons[persons.length-1].id+1})
    const key = filterKey
    setPersons(newList)

    filterPerson({newList, key})
  }

  const filterPerson = ({newList,key})=>{
    const filtered = newList.filter(person =>
              person.name.includes(key))
    setDisplayedContacts(filtered)
  }

  const handleFilterInBar = (key) =>{
    const newList = persons
    filterPerson({newList, key})
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <FilterBar filterHandle={handleFilterInBar} filterKey={filterKey} setFilterKey={setFilterKey}/>
        <NewContact addPerson={addPerson}/>
        <ContactList contacts={displayedContacts}/>
    </div>
  )
}

export default App