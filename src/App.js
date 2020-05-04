import React, { useState ,useEffect} from 'react';
import useAllstudents from "./components/myHooks/getAllstudent"

function Test() {
  // 通过自定义Hook, 发送ajax请求获取数据
  let resp =  useAllstudents()
  if( resp ) {
    const list = resp.map( it => {
        return <li key={it.id}>姓名: {it.name} 地址: {it.address}</li>
    })

    return (
      <div>
          <h1>数据总条数: {resp.cont}</h1>
          <ul>
            {list}
          </ul>
      </div>
    )
  }
  return null
}

function App() { 
  return (
     <div>
       <Test />
     </div>
    )
}

export default App;
