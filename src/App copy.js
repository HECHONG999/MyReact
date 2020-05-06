import React, { useState , useRef} from 'react';

function Parent() {
  const [n, setN] = useState(0);
  const inputRef = useRef()
  return ( 
    <div>
      <input ref={inputRef}  type="text"/>
       <button onClick={() => {
                console.log(inputRef.current.value)
            }}>得到input的值</button>
      <button onClick={ () => {
        const newN = inputRef.current.value;
        console.log("点击")
        setN(newN)
      }}> 点击</button>
    </div>
  )
}


function App() { 
  return (
     <div>
        <Parent />
     </div>
    )
}

export default App;
