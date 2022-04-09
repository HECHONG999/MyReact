/**
 * 监听器模块:
 *  使用一个函数去控制监听器，添加监听器函数,和触发监听器函数
 */
export default class ListenerManager {
    listeners = []; // 存储监听函数的数组

    /**
     * 添加一个监听器，返回一个用于取消监听的函数
     */
    addListener (listener) {
        this.listeners.push(listener);
        const unListen = () => {
            const index = this.listeners.indexOf(listener); // 从监听器数组中，动态查找监听器的下标
            this.listeners.splice(index, 1);
            console.log("listener===", this.listeners)
        }
        
        return unListen;    
    }

    /**
     * 触发所有的监听器
     * @param {*} location 
     * @param {*} action 
     */
    triggerListener (location, action) {
        // for of 循环数组
        for(const listener of this.listeners) {
            listener(location, action);
        }
    }
}