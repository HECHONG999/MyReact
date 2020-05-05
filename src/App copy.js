import React, { useContext, useState } from 'react';
// useCallback

class Test extends React.PureComponent {
  render() {
      console.log("Test Render")
      return <div>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.onClick}>改变文本</button>
      </div>
  }
}

function Parent() {
  const [txt, setTxt] = useState("123456");
  const [n, setN]  = useState(0)
  return (
    <div> 
      {/* onClick每一次render都会产生一个新函数地址的引用 */}
      <Test txt={txt} onClick={ () => {
        setTxt(Math.random());
      }}/>

      {/* 这里改变state的数据, 只是父组件改变了数据, Test组件采用了优化,不会发生更新 */}
      <input type="number" value={n} onChange={ (e) => {
          setN(e.target.value)
      }}></input>
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
