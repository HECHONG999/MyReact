import React, { Component } from 'react'
import Banner from "./index";
import src1 from "./img/1.jpg"
import src2 from "./img/2.webp"
import src3 from "./img/3.jpg"
import src4 from "./img/4.jpg"
import src5 from "./img/5.webp"


export default class Test extends Component {
    state = {
        width: 520,
        height: 280,
        autoDuration: 2000,
        duration: 500,
        imgSrcs: [src1, src2,src3,src4,src5]
    }
    render() {
        return (
            <>
             <Banner {...this.state} />   
            </>
        )
    }
}
