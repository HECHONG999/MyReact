const routerConig = {
    user: {
        root: "/user",
        info: "/info",
        pay: {
            root: "/pay",
            before: "/before",
            after: "/after"
        }
    }
}


/**
 * 将该对象的每一个字符串属性，前面添加baseStr
 * 如果属性名为root，则直接添加baseStr
 * 如果属性名不是root，则添加baseStr/root属性值
 * 如果属性不是字符串，递归调用该方法
 * @param {*} router 
 * @param {*} baseUrl 
 */
function dealRouter(router, baseUrl) {
    let newBaseUrl = baseUrl + (router.root == undefined ? "": router.root) 
    for(let prop in router) {
        let value = router[prop]
       
        if(typeof value == "string") { // 属性值为字符串的情况
            if( prop === "root") {
                router[prop] = baseUrl + value;
            } else {
                router[prop] = newBaseUrl + router[prop]
            }
        } else { // 如果是对象，递归调用该方法
            dealRouter(router[prop], newBaseUrl)
        }
    }
}

dealRouter(routerConig, "")

console.log(routerConig)