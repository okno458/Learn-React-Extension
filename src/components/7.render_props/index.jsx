import React, { Component } from 'react'
import './index.css'
import C from '../1.setState的两种写法'

// render props

// 如何向组件内部动态传入带内容的结构(标签)?

// 	Vue中: 
// 		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
// 	React中:
// 		使用children props: 通过组件标签体传入结构
// 		使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

//  children props

// 	<A>
// 	  <B>xxxx</B>
// 	</A>
// 	{this.props.children}
// 	问题: 如果B组件需要A组件内的数据, ==> 做不到 

// render props

// 	<A render={(data) => <C data={data}></C>}></A>
// 	A组件: {this.props.render(内部state数据)}
// 	C组件: 读取A组件传入的数据显示 {this.props.data} 

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <A render={(name) => <C name={name}/>} />
      </div>
    )
  }
}

class A extends Component {
    state = {name:'tom'}
    render() {
      const {name} = this.state
      return (
        <div className="a">
          <h3>a组件</h3>
          {this.props.render(name)}
        </div>
      )
    }
  }
  
  class B extends Component {
    render() {
      return (
        <div className="b">
          <h3>b组件,{this.props.name}</h3>
        </div>
      )
    }
  }
  