import React, { Component } from 'react'

export default class Demo extends Component {
//   Fragment 使用
// 	语法：<Fragment><Fragment>
// 	还可以写空标签<></>
//作用
// > 可以不用必须有一个真实的DOM根标签,减少层级嵌套
  render() {
    return (
      <>
         <input type="text" />
         <input type="text" />
      </>
    )
  }
}
