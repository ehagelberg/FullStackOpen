import React , {useState, useEffect} from 'react'
import Notification from './components/Notification'
import Contacts from './components/Contacts'
import Filter from './components/filter'
import SubmitForm from './components/SubmitForm'
import services from './services/persons'
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(()=>{
    services.getAll().then(res => {
      setPersons(res.data)
    })
  }, [])

  const addPersons = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    const result = persons.find(person => person.name === newName)

    if(result !== undefined){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        services.updateNumber({...result, number: newNumber}).then(res=>{
        setPersons(persons.map(person => person.id !== result.id ? person : res.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(res => {
        setNotification(`Information of ${newPerson.name} has already been removed from server`)
        setTimeout(() => {
          setNotification(null)}, 5000);
        })
        
      }
    }else{
        services.addToServer(newPerson).then(res =>{
          console.log(res)
          setPersons(persons.concat(res.data))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${newPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000);
      })
    }
  }

  const handlePersonChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleDelete = (id) => {
    const toDelete = persons.filter(person => person.id === id)
    console.log("poisto", toDelete[0])
    if(window.confirm(`Delete ${toDelete[0].name}?`)){
      services.deleteFromServer(toDelete[0]).then(res => {
        console.log('poistettu', res.data)
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <SubmitForm onSubmit={addPersons} newName={newName} 
        handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Contacts persons={persons} filter={newFilter} deleteHandler={handleDelete}/>
        
    </div>
  )
}

export default App;
