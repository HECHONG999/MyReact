let timerTop, timerLeft

export default function resetScroll(totalTime) {
    //防止多次进行跳转
    clearInterval(timerTop);
    clearInterval(timerLeft);
    // 先获取一下html文档
    const html = document.documentElement;
    console.log(html.scrollTop, "+++");
    timerTop =  animate(html.scrollTop, 0, (distance) => {
        html.scrollTop = distance;
    })

     timerLeft = animate(html.scrollLeft, 0, (distance) => {
        html.scrollLeft = distance;
    })
}


function animate(start, end  ,callBack) {
    clearInterval(timer)
    const tick = 16;   // 每16毫秒运动一次
    const totalTime = 1000;
    const times = Math.ceil( totalTime / tick);  // 运动的次数
    let distance = (end - start) / times; // 每一次运动的距离
    let curTime = 0;
   var timer = setInterval(() => {
        curTime ++;
        start += distance;
        if( curTime == times ) {
            start = end;
            clearInterval(timer);
        }
        callBack(start);   // 每次运动的距离
    }, tick);
    return timer;  // 返回每一个定时器的标记
}