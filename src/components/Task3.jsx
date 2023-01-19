import React from 'react'



function Task3() {

const [ numbers, setNumbers ] = React.useState( [1, 2, 3, 4, 5, 6, 7, 8, 9])

function changeHandler(index,event){
  setNumbers([...numbers.slice( 0, index ),+event.target.value,...numbers.slice( index + 1 )])
}

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
const result = average( numbers );
    
console.log(numbers)

return (
    <div>
       { 
       numbers.map((item,index) => (
        <div>
          <input key = {`${item}_${index}`} value={item} onChange={event => changeHandler(index, event)}/>
       </div>
      ))
      }
      {result}
    </div>
    )
}
export default Task3