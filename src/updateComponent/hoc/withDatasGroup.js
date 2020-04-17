import React from 'react';

export default function withDatasGroup(Comp) {

    // 这个新的高阶组件就负责提供数据然后渲染一组多选框,并且管理这一组多选框的状态
    return class WithBoxGroup extends React.Component {
        state = {
            datas: [
                {value:"football", text:"足球"},
                {value:"basketball", text:"篮球"},
                {value:"movie", text:"电影"}
            ],
            chooseDates: [],
            name: "checkbox" ,
            value: ""
        }


        render () {

            let Comps = this.state.datas.map( item => {
               return <Comp key={item.value} info={item} {...this.state} onChange={ result => (
                   this.setState({
                       chooseDates: result,
                       value: result
                   })
               )} />
            })

            return (
                [Comps]
            )
        }
    }
}
