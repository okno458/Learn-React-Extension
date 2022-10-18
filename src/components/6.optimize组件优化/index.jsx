import React, { PureComponent } from 'react'
import './index.css'

// 组件优化
//  Component的2个问题 
// > 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
// >
// > 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
// 效率高的做法
// >  只有当组件的state或props数据发生改变时才重新render()
//  原因
// >  Component中的shouldComponentUpdate()总是返回true
//  解决
// 	办法1: 
// 		重写shouldComponentUpdate()方法
// 		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
// 	办法2:  
// 		使用PureComponent
// 		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
// 		注意: 
// 			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
// 			不要直接修改state数据, 而是要产生新数据
// 	项目中一般使用PureComponent来优化


export default class Parent extends PureComponent {
  state = {carName: 'bench',stus:['zhang,wang,li']}
  changeCar = () => {
    this.setState({carName: 'bahe'})
  }
  addStu = () => {
    const {stus} = this.state
    this.setState({stus:['liu',...stus]})
  }
  // shouldComponentUpdate(nextProps,nextState) {
  //   // console.log(this.props,this.state)//目前的props和state
  //   // console.log(nextProps,nextState)//接下来要变化的props，目标state
  //   if(this.state.carName === nextState.carName){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  render() {
    console.log('parent----------------')
    const {carName} = this.state
    
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <span>CarName:{carName}</span><br/>
        {this.state.stus}&nbsp;&nbsp;&nbsp;
        <button onClick={this.changeCar}>点击换车</button>
        <button onClick={this.addStu}>点击添加Liu</button>

        <Child carName="auto"></Child>
      </div>
    )
  }
}


class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log(this.props,this.state)
  //   console.log(nextProps,nextState)
  //   if(this.props.carName === nextProps.carName){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
    render() {
      console.log('child----------------')
      return (
        <div className="child"> 
            <h3>Child组件</h3>
            <span>接收到的carname:{this.props.carName}</span>
        </div>
      )
    }
  }
  