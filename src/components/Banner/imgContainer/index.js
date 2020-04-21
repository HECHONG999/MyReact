import React, { Component } from 'react';
import propTypes from "prop-types";
import "./index.css"

export default class ImgContainer extends Component {
    static propTypes = {
        imgSrcs: propTypes.arrayOf( propTypes.string ),// 轮播图片数组
        imgWidth: propTypes.number.isRequired,         // 单张图片的宽度
        imgHeight: propTypes.number.isRequired,        // 单张图片的高度
        duration: propTypes.number.isRequired          // 单张图片轮播切换的时间 
    }
    ulContainer = (el) => {
       this.ulBox = el;
    }
    // 计时器间隔时间
    stick = 16;
    // 计时器标识
    timer = null;

      /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成切换
     * @param {*} index 图片下标，从0开始
     */
    switchTo = (index) => {
        if(index < 0) {
            index = 0
        }
        if( index > this.props.imgSrcs.length - 1) {  // index=0时,展示imgSrcs第0索引的图片 index=1,时展示索引为1的图片
            index = this.props.imgSrcs.length
        }

        // 根据index计算marginLeft的目标距离
        let targetMarginLeft = -index * this.props.imgWidth;
        // 计算当前ul的marginleft
        let curMarginLeft =parseFloat( getComputedStyle(this.ulBox).marginLeft)

        // 轮播一张图片需要移动的总次数 times
        let times = Math.ceil( this.props.duration / this.stick)
        // 当前运动次数
        let curTimes = 0;
        // 计算运动的距离 
    
        let totalDis = targetMarginLeft - curMarginLeft;     // 当前图片marginLeft的距离到目标marginLeft的距离
        // 每一次移动的距离 dis
        let dis = totalDis / times
        clearInterval(this.timer);   // 清除上一次的定时器
       this.timer =  setInterval(()=> {
         
            curTimes ++;
            curMarginLeft += dis;
            this.ulBox.style.marginLeft = curMarginLeft + "px";
            if( curTimes >= times ) {
                clearInterval(this.timer);
                this.ulBox.style.marginLeft = curMarginLeft + "px";
                console.log(this.ulBox.style.marginLeft, "++++++")
            }
        }, this.stick)
       
    }
    render() {
        const imgs = this.props.imgSrcs.map( (item,index) => {
            return (
                <li key={index}><img src={item} style={{width: this.props.imgWidth, height: this.props.imgHeight, float:"left"}} alt=""/></li>
            )
        })
        return (
            <ul 
                ref={this.ulContainer}
                style={{
                    width: this.props.imgWidth * this.props.imgSrcs.length,
                    height: this.props.imgHeight,
                    listStyle: "none"
                }}
            >
                {imgs}
            </ul>
        )
    }
}
