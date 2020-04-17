import React from 'react';
// import Test from "./components/CheckBoxGroup/test"
// import Test from "./components/RadioBoxGroup/test"
import CheckBoxGroup from "./updateComponent/CheckBoxGroup"
import RadioBox from "./updateComponent/RadioBoxGroup"
import Select from "./updateComponent/Select"
import WithDatasGroup from "./updateComponent/hoc/withDatasGroup";


let CheckBox = WithDatasGroup(CheckBoxGroup);
let Radio = WithDatasGroup(RadioBox);
class  App extends React.Component {

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
    return (
      <div>
          <CheckBox/>
          <br/>
          <Radio />
          <br/>
          <Select {...this.state}  />
      </div>
    );
  }
}

export default App;
