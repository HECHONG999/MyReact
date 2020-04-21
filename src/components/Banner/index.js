import React, { Component } from 'react';
import "./index.css"
import ImgContainer from "./imgContainer"
import SwitchArrow from "./switchArrow";
import SwitchSpot from "./switchSpot"

export default class Banner extends Component {
    static defaultProps = {
        width: 520, // 默认轮播图宽度
        height: 280,
        imgSrcs: [], // 轮播图片地址
        autoDuration: 2000, // 自动轮播时间
        duration: 1000, // 单张图片轮播切换的时间
    }

    // 自动轮播定时器
    timer = null;

  autoSwitch = () => {
      clearInterval(this.timer)
      this.timer = setInterval( () => {
          let cur = this.state.curIndex;
          cur = ( cur + 1) % this.props.imgSrcs.length;
          this.handleSwitch(cur)
      }, this.props.autoDuration )
  }


  componentDidMount() {
      this.autoSwitch()
  }
  
    state = {
        curIndex: 0   // 控制当前轮播图片的索引
    }

    imgContainerRef = (el) => {
        this.imgContainer = el
    }

    handleClick = () => {
        this.imgContainer.switchTo(2)
    }

    /**
     * 
     */
    handleChangeCurIndex = (type) => {
        let cur = this.state.curIndex;
        console.log(cur)
        if( type === "left") {
            cur --;
            if(cur < 0) {
                cur = this.props.imgSrcs.length - 1
            }
        } else {
            cur ++;
            if( cur > this.props.imgSrcs.length - 1) {
                cur = 0
            }
        }
        console.log(cur)

        this.handleSwitch(cur)
    }

    /**
     * 得到一个index,重新设置状态, 图片轮播
     */
    handleSwitch = (index) => {
        this.setState({
            curIndex: index
        })

        this.imgContainer.switchTo(index);
    }
    render() {
        return (
            <div 
                onMouseEnter={ () => {
                    clearInterval(this.timer)
                }}
                onMouseLeave={ () => {
                    this.autoSwitch()
                }}
                className="banner-container"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
            >
                <ImgContainer 
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleChangeCurIndex} />

                <SwitchSpot 
                    total={this.props.imgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleChangeCurIndex}
                />
                  <button onClick={this.handleClick}>跳转</button>
            </div>

          
        )
    }
}
