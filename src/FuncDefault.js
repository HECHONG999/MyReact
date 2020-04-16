import React from 'react'

export default function FuncDefault(props) {
    console.log(props); // 在组件加载完成时就已经进行属性默认赋值的混合。
    return (
        <div>
            <p> {props.name} </p>
            <p></p>
            {props.age}
        </div>
    )
}


// 函数组件的默认赋值, 在该函数组件加载时就会进行默认值赋值, 如果使用该组件者没传,就使用默认组件否则就使用所传的组件
FuncDefault.defaultProps = {
    name: "何冲真的很帅",
    age: 18
}
