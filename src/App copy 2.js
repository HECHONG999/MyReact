import React, { useState , useEffect,useRef} from 'react';


function App() { 
  const [n, setN] = useState(10);
  const refN = useRef(n); // {current:10}
  useEffect(() => {
    const timer = setInterval( () => {
        refN.current --;
        setN(refN.current);
        if( refN.current == 0) {
          clearInterval(timer);
        }
    },1000)
    return () => {
    clearInterval(timer)
    }
  }, [n])
  return (
     <div>
       {n}
     </div>
    )
}

export default App;
