import React, { useImperativeHandle,useRef } from 'react';

function Test(props, testRef) {
  // useImperativeHandle用于获取函数组件的方法调用
  useImperativeHandle(testRef, () => {
    //如果不给依赖项，则每次运行函数组件都会调用该方法
    //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
    //相当于给 ref.current = 1
    return {
        method(){
            console.log("Test Component Called")
        }
    }
}, [])
  return <h1>我是Test组件</h1>
}

// class Test extends React.PureComponent {
//   method () {
//     console.log("TEST method方法调用")
//     return "喜欢你"
//   }
  
//   render () {
//     return (
//       <div>我是Test组件</div>
//     )
//   }
// }

// 使用forwardRef转发, 用于获取函数组件的内的Dom,或者配合useImperativeHandle获取函数组件内的方法调用
const TestRef = React.forwardRef(Test)
// const testRef = React.createRef()
function App() { 
  const testRef = React.createRef()
  return (
     <div>
       <TestRef ref={testRef}/>
       <button onClick={ () => {
         console.log(testRef.current.method())
       }}>调用method方法</button>
     </div>
    )
}

export default App;
