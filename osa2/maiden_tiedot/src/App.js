import React , {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleShow = (name) => {
    console.log("show button", name)
    setNewFilter(name)
  }

  return (
    <div>
      <form>
        <div>
          find countries <input value={newFilter} onChange={handleFilterChange}/>
        </div>
      </form>
      <Countries countries={countries} filter={newFilter} handleShow={handleShow}/>
    </div>
  );
}

export default App;
