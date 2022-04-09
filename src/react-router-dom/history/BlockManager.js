export default class Block {
    prompt = null; //该属性是否有值，决定了是否有阻塞

    constructor(getUserConfirmation) {
        this.getUserConfirmation = getUserConfirmation;
    }

    /**
     * 设置一个阻塞，传递一个提示消息
     * @param {*} prompt    可以是字符串，也可以是函数， 函数返回一个字符串
     * @returns 
     */
    block(prompt) {
        if (typeof prompt !== "string"
        && typeof prompt !== "function"
    ) {
        throw new TypeError("block must be string or function");
    }
    this.prompt = prompt;
    return () => {
        this.prompt = null;
    }
    }

    /**
     * 触发阻塞的时候， 要传入一个 location 和 action
     * @param {*} location 
     * @param {*} action 
     */
    triggerBlock(location, action, callback) {
        if (!this.prompt) {
            callback();
            return;
        }
        let message; //阻塞消息
        if (typeof this.prompt === "string") {
            message = this.prompt;
        }
        else if (typeof this.prompt === "function") {
            message = this.prompt(location, action);
        }
        //调用getUserConfirmation
        this.getUserConfirmation(message, result => {
            if (result === true) {
                //可以跳转了
                callback();
            }
        })
    }
}