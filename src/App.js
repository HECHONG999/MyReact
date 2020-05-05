import React, { useCallback, useState , useMemo} from 'react';

// useMemo 该函数接收一个函数作为参数，必须返回一个函数, 返回的函数写的功能与Callback一样
// 功能: 用于固定一个函数的索引地址
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
  console.log("parent Render")
  const [txt, setTxt] = useState("123456");
  const [n, setN]  = useState(0);
  // useCallback： 用于固定一个函数的引用,只有当txt依赖的值发生变化时才会更新该函数的引用
  const handleClick = useMemo( () => {
    return () => {
      setTxt( txt + 1 )
    }
  }, [txt])
  return (
    <div> 
      {/* onClick每一次render都会产生一个新函数地址的引用 */}
         {/* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */}
      <Test txt={txt} onClick={ handleClick }/>

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
