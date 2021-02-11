import Country from './Country'
import '../index.css'

const Countries = ({countries, filter, handleShow}) => {

    const filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    if(filtered.length === 1){
        return (
            <div>
                <Country country={filtered[0]}/>
            </div> 
        )
    }
    else if(filtered.length <= 10 && filtered.length > 1){
        return (
            <table>
            <tbody>
            {filtered.map(country => [<tr key={country.name}><td><p>{country.name}</p></td>
            <td><button key={`btn ${country.name}`} onClick={() => handleShow(country.name)}>show</button></td></tr>])}
            </tbody> 
            </table>     
        )
    }
    else{
        return(<div>
            <p>Too many matches, specify another filter</p>
        </div>)
    }
    
}

export default Countries