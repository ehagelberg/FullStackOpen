import React from 'react'
import Contact from './contact'

const Contacts = ({persons, filter, deleteHandler}) => {
    return (
        <div>
        {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person =>
        <Contact key={person.name} name={person.name} number={person.number} id={person.id} deleteHandler={()=>deleteHandler(person.id)}/>)}
        </div>
    )
}

export default Contacts