export default {
    isLogin: false,
    loginIn: function () {
        this.isLogin = true
    },
    loginOut: function () {
        this.isLogin = false
    }
}