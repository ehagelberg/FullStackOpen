import axios from 'axios'

const getAll = () => {
    return axios.get('http://localhost:3001/persons')
}

const addToServer  = newPerson => {
    return axios.post('http://localhost:3001/persons', newPerson)
}

const deleteFromServer  = toDelete => {
    return axios.delete(`http://localhost:3001/persons/${toDelete.id}`, toDelete)
}

const updateNumber = toUpdate => {
    return axios.put(`http://localhost:3001/persons/${toUpdate.id}`, toUpdate)
}

export default {getAll, addToServer, deleteFromServer, updateNumber}
