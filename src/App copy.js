import React, { useState ,useEffect} from 'react';
const ref = React.createRef();
function stop() {
  clearInterval(window.timer);
  window.timer = null;
}
function MoveBlock(props) {
  useEffect( () => {
    // 渲染完成之后
    const div = ref.current;
    let curTimes = 0; // 当前得运动次数
    const disX= props.left / 1000; // 每一次运动X轴移动的距离
    const disY = props.top / 1000;  // 每一次运动Y轴移动的距离
    window.timer = setInterval( () => {
      curTimes ++;

      const newLeft = curTimes * disX;
      const newTop = curTimes * disY;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";
      if( curTimes == 1000 ) {
          stop()
      }
    })

    return () => {
      console.log("清理函数执行")
    }
    })
    return (
        <div ref={ref} style={{
          position: "fixed",
          top: 0,
          left: 0,
          background: "red",
          width: "200px",
          height: "200px"
        }}></div>
    )
}

function App() {  
  const [point, setPoint] = useState({x: 200, y: 300});
  const [visible, setVisible] = useState(true)
  return (
      <div>
        {visible && (<div>
          <MoveBlock left={point.x} top={point.y} />
        <input type="number" value={point.x} onChange={ (e) => {
            setPoint({
              ...point,
              x: parseInt(e.target.value)
            })
        }}/>
        <input type="number" value={point.y} onChange={ (e) => {
          setPoint({
            ...point,
            y: parseInt(e.target.value)
          })
        }}/>
        </div>)}
         <button onClick={ () => {
        setVisible(!visible);
      }}> 显示/隐藏</button>
      </div>
     
    )
}

export default App;
