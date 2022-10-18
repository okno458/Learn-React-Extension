import React, { Component } from 'react'
import './index.css'
// Context的理解
// > 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信
//  使用
// ```js
// 1) 创建Context容器对象：
	
// 2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
// 	<xxxContext.Provider value={数据}>
// 		子组件
//     </xxxContext.Provider>
// 3) 后代组件读取数据：
// 	//第一种方式:仅适用于类组件 
// 	  static contextType = xxxContext  // 声明接收context
// 	  this.context // 读取context中的value数据
// 	//第二种方式: 函数组件与类组件都可以
// 	  <xxxContext.Consumer>
// 	    {
// 	      value => ( // value就是context中的value数据
// 	        要显示的内容
// 	      )
// 	    }
// 	  </xxxContext.Consumer>
// ```
//  注意
// 	在应用开发中一般不用context, 一般都用它的封装react插件


//创建context对象
const myContext = React.createContext()
const {Provider,Consumer} = myContext
export default class A extends Component {
    state = {username: 'tom',age:18}
  render() {
    const {username,age} = this.state
    return (
      <div className="parent">
        <h3>A组件</h3>
        <h4>用户名是：{username}</h4>
        <Provider value={{username,age}}>
            <B></B>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
    render() {
      return (
        <div className="child">
            <h3>B组件</h3>
            <h4>从A组件接收的用户名是：</h4>
            <C></C>
        </div>
      )
    }
}
//类组件写法
// class C extends Component {
//     //声明接收context
//     static contextType = myContext
//     render() {
//       const {username,age} = this.context
//       return (
//         <div className="grand">
//             <h3>C组件</h3>
//             <h4>从A组件接收的用户名是：{username},age是：{age}</h4>
//         </div>
//       )
//     }
//   }

//函数式组件写法
function C() {
    return (
        <div className="grand">
            <h3>C组件</h3>
            <Consumer>
                {
                    value =>  `从A组件接收的用户名是:${value.username},age是:${value.age}`
                }
            </Consumer>
        </div>
    )
}