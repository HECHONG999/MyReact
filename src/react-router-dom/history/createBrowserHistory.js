import React from "react";
import ListenerManager from "./ListenerManager";
import BlockManager from "./BlockManager"

export default function createBrowserHistory(options = {}) {
    const {
        basename="", 
        forceRefresh = false,
        keyLength = 6,
        // getUserConfirmation 传入一个 callback
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options;
    const listenerManager = new ListenerManager();
    const blockManager = new BlockManager(getUserConfirmation)
    function go(step) {
        window.history.go(step);
    }

    function goBck() {
        window.history.goBck();
    }
    function goForward() {
        window.history.goForward();
    }

    function push(path, state) {
        changePages(path,state, true);
    }

    function replace(path, state) {
        changePages(path,state, false);
    }

    function changePages(path, state, isPush) {
        let action = "PUSH";
        const pathInfo = handlePathAndState(path, state,basename);
        // let location =  createLocation(basename);   // 这里需要拿到新的 location对象
        let location = createLocationFormPath(pathInfo, basename)

        blockManager.triggerBlock(location, action,() => {
            debugger
            if(isPush) {
                action = 'PUSH';
                window.history.pushState({
                    key: createKey(keyLength),
                    state:pathInfo.state
                }, null, pathInfo.path)
            }else {
                action = 'REPLACE';
                window.history.replaceState({
                    key: createKey(keyLength),
                    state:pathInfo.state
                }, null, pathInfo.path)
            }
            listenerManager.triggerListener(location, action);  // 改变location之前先触发一下监听器
            history.action = action;
            history.location = location
            if(forceRefresh) {
                // 强制刷新页面
                window.location.href  = path;
            }
        })
     
       
    }


    /**
     * 添加对地址变化的监听,当地址发生变化触发 监听器事件
     */
    function addListenerDom() {
        // 只能监听 前进、后退，针对用户对地址的变化，无法监听到 pushState 和 replaceState
        window.addEventListener('popstate', () => { 
            console.log("地址发生了变化");
            const location = createLocation(basename);      // 更新location对象
            const action = "POP";
            listenerManager.triggerListener(location,action); // 触发监听器的时候，把新的location,赋值给监听器函数
            history.location = location;    // 赋值 history的 location 
        })
    }
    addListenerDom();   //启动监听器
    /**
     * 添加一个监听器，并且返回一个可用于取消监听的函数
     * @param {*} listener 
     */
    function listen(listener){
        return listenerManager.addListener(listener);
    }

    function block(prompt) {
        return blockManager.block(prompt);
    }
    let history =  {
        action: "POP",
        go,
        goBck,
        goForward,
        push,
        replace,
        listen,
        block,
        location: createLocation(basename),
    }
    return history;
}

function createKey(keyLength) {
    return Math.random().toString(36).substring(2, keyLength);
}

function handlePathAndState(path, state, basename) {
     // 当 path 为字符串的时候
     if(typeof path == "string") {
         return {
             path,
             state
         }
     }else if(typeof path == "object") {
        let resultPath = basename +  path.pathname;
        let {hash, search} = path;
        if(hash.charAt(0) !== "#") {
            hash = "#" + hash;
        }
        if(hash.charAt(0) !== "?") {
            search = "?" + search
        }
        resultPath += hash;
        resultPath += search;
        return {
            path: resultPath,
            state: path.state
        }
     }
}

function createLocation (basename) {
    let pathname = window.location.pathname;
    // 处理 basename的情况
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    const location = {
        pathname,
        hash: window.location.hash,
        search: window.location.search,
    };

    // 处理state 
    let state, historyState = window.history.state;
    /**
     * 为什么需要处理state，react-router为了在通过push 改变state的时候，与其它路由框架在改变路由的时候不冲突，
     * 
     */
    if(historyState == null) {
        state = undefined; 
    }else if(typeof historyState !== 'object') {
        state = historyState;
    }else {
        if('key' in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        } else {
            state = historyState
        }
    }
    location.state = state;
    return location;
}

function createLocationFormPath(pathInfo, basename) {
    let pathname = pathInfo.path.replace(/[#?].*$/, '');    // 找#和?后的内容 替换为空
    // 处理basename的情况
    let reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, '');
    const questionIndex = pathInfo.path.indexOf('?');
    const sharpIndex = pathInfo.path.indexOf('#');
    let search;
    if(questionIndex === -1 || questionIndex > sharpIndex) {
        search = ''
    }else {
        search = pathInfo.path.substring(questionIndex, sharpIndex);
    }
    // hash
    let hash;
    if(sharpIndex === -1) {
        hash = ''
    }else {
        hash = pathInfo.path.substr(sharpIndex);
    }

    return {
        hash,
        search,
        pathname,
        state: pathInfo.state
    }
}
window.createLocation = createLocation