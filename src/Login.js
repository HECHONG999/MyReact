import React from 'react';
import qs from "query-string";
import loginInfo from "./isLogin"
/**
 * login页: 判断是从哪个页面跳转过来的, 登录成功后返回到哪个页面
 * @param {*} props 
 */
export default function Login(props) {
    return (
        <div>
            <h1>登录授权页</h1>
            <p>该页面仅作测试，点击下方按钮即登录成功</p>
            <button onClick={ () => {
                loginInfo.loginIn(); // 改变登录状态
                // const query = qs.parse(props.location.search); // 第三方库query-string解析search参数
                
                // if( query.returnUrl ) {
                //     props.history.push(query.returnUrl);
                // } else {
                //     props.history.push("/")
                // }

                // 或者通过location.state 来获取路径
                if( props.location.state) {
                    props.history.push(props.location.state)
                } else {
                    props.history.push("/")
                }
            }}>登录</button>
        </div>
    )
}
