import React from 'react'

function Task1() {
    
const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

const addNumber = () => {
  const randNumber = Math.round(Math.random() * 10);
  const newArr = [...numbers,randNumber];
  setNumbers(newArr)
}
function delNumber(index) {
  setNumbers([...numbers.slice(0,index),...numbers.slice(index + 1)])
}
function editNumber(index) {
  setNumbers([...numbers.slice(0,index),"!",...numbers.slice(index + 1)])
}
const reverseNumber = () => {
  const reverseArray = numbers.reverse()
  setNumbers(reverseArray)
}


return (
  <div className="App">
    <ul>
      {numbers.map((num,index) => (
        <div>
          <p key = {`${num}_${index}`}>{num}-
          <button onClick={() => delNumber(index)}>Удалить</button>
          <button onClick={() => editNumber(index)}>Редактировать</button>
          </p>
        </div>
        ))}
    </ul>
    <button onClick={addNumber}>Добавить</button>
    <button onClick={reverseNumber}>Перевернуть массив</button>

    
    
  </div>
);
}

export default Task1
