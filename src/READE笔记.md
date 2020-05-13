# React动画 - SwitchTransition

用于有秩序的切换内部组件

默认情况下：out-in

1. 当key值改变时，会将之前的DOM根元素添加退出样式（exit,exit-active)
2. 退出完成后，将该DOM元素移除
3. 重新渲染内部DOM元素
4. 为新渲染的DOM根元素添加进入样式(enter, enter-active, enter-done)

in-out:
1. 重新渲染内部DOM元素，保留之前的元素
2. 为新渲染的DOM根元素添加进入样式(enter, enter-active, enter-done)
3. 将之前的DOM根元素添加退出样式（exit,exit-active)
4. 退出完成后，将该DOM元素移除

> 该库寻找dom元素的方式，是使用已经过时的API：findDomNode，该方法可以找到某个组件下的DOM根元素

# 其他组件

已学习：

- Router：BrowswerRouter、HashRouter
- Route
- Switch
- 高阶函数：withRouter

## Link

生成一个无刷新跳转的a元素

- to
  - 字符串：跳转的目标地址
  - 对象：
    - pathname：url路径
    - search
    - hash
    - state：附加的状态信息
- replace：bool，表示是否是替换当前地址，默认是false
- innerRef：可以将内部的a元素的ref附着在传递的对象或函数参数上
  - 函数
  - ref对象


## NavLink

是一种特殊的Link，Link组件具备的功能，它都有

它具备的额外功能是：根据当前地址和链接地址，来决定该链接的样式

- activeClassName: 匹配时使用的类名
- activeStyle: 匹配时使用的内联样式
- exact: 是否精确匹配
- sensitive：匹配时是否区分大小写
- strict：是否严格匹配最后一个斜杠（默认为false）

## Redirect

重定向组件，当加载到该组件时，会自动跳转（无刷新）到另外一个地址

- to：跳转的地址
  - 字符串
  - 对象
- push: 默认为false，表示跳转使用替换的方式，设置为true后，则使用push的方式跳转
- from：当匹配到from地址规则时才进行跳转
- exact: 是否精确匹配from
- sensitive：from匹配时是否区分大小写
- strict：from是否严格匹配最后一个斜杠