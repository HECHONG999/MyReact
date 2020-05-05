import React, { useContext } from 'react';

// 创建一个上下文对象
// 子组件可用该上下文,获取父组件的数据
const ctx = React.createContext()

function Test() {
  return <ctx.Consumer>
        {value => <h1>上下文的值: {value.name} </h1>}
  </ctx.Consumer>
}

// function Test() {
//     const value = useContext(ctx);
//     console.log(value)
//     return <h1>姓名：{value.name}</h1>
// }
function App() { 
  return (
     <div>
       <ctx.Provider value={{name: "何金明 何益阳"}}>
            <Test></Test>
       </ctx.Provider>
     </div>
    )
}

export default App;
