import React, { useState ,useEffect} from 'react';
import {getAllStudent} from "./services/getAllStudent";
import StudentList from "./components/studentList";

  // 利用高阶组件实现横切关注点: 在类组件componentDidMount中发送ajax数据请求
 class AllStudent extends React.Component {
    constructor(props) {
      super(props)
    }
    
    state = {
      stus: []
    }
    
    async componentDidMount() {
      const stusList = await getAllStudent()
      console.log(stusList)
      this.setState({
        stus: stusList
      })
    }
    
    render () {
     
      return (
            <div>
              {this.props.render && this.props.render(this.state.stus)}
            </div>
        )
    }
  }


function Test(props) {
  const list =  props.stus.map( it => {
      return <li  key={it.id}>姓名: {it.name} 地址: {it.address}</li>
  })

  return <ul>
    {list}
  </ul>
}



function App() {  
  return (
     <div>
        <AllStudent render={ stus => <Test stus={...stus} />} />
     </div>
    )
}

export default App;
