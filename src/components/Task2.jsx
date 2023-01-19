import React from 'react'

function Task2() {

  const [ value, setValue ] = React.useState('')
  const [ numbers, setNumbers ] = React.useState(["a","b","c","d","e"])


  const addNumber = () => {
    const newArr = [...numbers,value];
    setNumbers(newArr)
    setValue("")
  }
  function delNumber(index) {
    setNumbers([...numbers.slice(0,index),...numbers.slice(index + 1)])
  }

return (
  <div>
      <ul>
      { 
       numbers.map((item,index) => (
        <div>
          <li key = {`${item}_${index}`}>{item}</li>
        <button onClick={() => delNumber(index)}>Удалить</button>
       </div>
      ))
      }
      </ul>
    <input value = {value} onBlur = { addNumber } onChange = {(event) => setValue(event.target.value)}/>    

    
  </div>
)

}

export default Task2