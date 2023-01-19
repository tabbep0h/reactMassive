import React from 'react'


function Task4() {

  const [ notes, setNotes ] = React.useState(["a","b","c","d","e"])

  function changeHandler(index,event){
    setNotes([...notes.slice( 0, index ),event.target.value,...notes.slice( index + 1 )])
  }

  function editNumber(index,event) {
    setNotes([...notes.slice(0,index),event.target.value,...notes.slice(index + 1)])
  }

  return (
    <div>
      { 
       notes.map((item,index) => (
        <div>
          <li key = {`${item}_${index}`}>{item}</li>
          <button onClick={() => editNumber(index)}>Редактировать</button>
       </div>
      ))
       }
      { 
       notes.map((item,index) => (
        <div>
          <input key = {`${item}_${index}`} value={item} onChange={event => changeHandler(index, event)}/>
       </div>
      ))                                                                    
      }
    </div>
  )
}

export default Task4