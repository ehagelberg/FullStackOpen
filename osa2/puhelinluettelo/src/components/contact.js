import React from 'react'

const Contact = ({name, number, deleteHandler}) =>{
    return (
      <>
        <p>{name} {number}</p> <button onClick={deleteHandler} >delete</button>
      </>
    )
  }

  export default Contact