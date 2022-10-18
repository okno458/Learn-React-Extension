import React, { Component } from 'react'
import Child from './Child'

// 错误边界

// 理解：

// 错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面
// 特点：
// 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
// 使用方式：
// getDerivedStateFromError配合componentDidCatch
// ```js
// // 生命周期函数，一旦后台组件报错，就会触发
// static getDerivedStateFromError(error) {
//     console.log(error);
//     // 在render之前触发
//     // 返回新的state
//     return {
//         hasError: true,
//     };
// }
// componentDidCatch(error, info) {
//     // 统计页面的错误。发送请求发送到后台去
//     console.log(error, info);
// }


export default class Parent extends Component {
  state = {
    hasError:''//用于标识子组件是否产生错误
  }
  //当Parent的子组件出现错误时，会触发getDerivedStateFromError调用，并且会携带错误信息
  static getDerivedStateFromError(err){
     console.log(err);
     return {hasError: err}
  }

  componentDidCatch(){
    console.log('组件渲染时出错');
  }

  render() {
    return (
      <div>
        <h2>Parent组件</h2>
        {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child></Child>}
      </div>
    )
  }
}
