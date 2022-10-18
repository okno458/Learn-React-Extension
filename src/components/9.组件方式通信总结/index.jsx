import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1> 组件通信方式总结</h1>
        <h2>
            组件间的关系：
            <ul>
                <li> - 父子组件</li>
                <li>- 兄弟组件（非嵌套组件）</li>
                <li>- 祖孙组件（跨级组件）</li>
            </ul>
        </h2>
        <h2>
            几种通信方式：
            <ul>
                <li>
                    1.props：
                    (1).children props
                    (2).render props
                </li>
                <li>
                    2.消息订阅-发布：
                    pubs-sub、event等等
                </li>
                <li>
                    3.集中式管理：
                    redux、dva等等
                </li>
                <li>
                    4.conText:
                    生产者-消费者模式
                </li>
            </ul>
        </h2>
        <h2>
        比较好的搭配方式：
            <ul>
                <li> 父子组件：props</li>
                <li>兄弟组件：消息订阅-发布、集中式管理</li>
                <li> 祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)</li>
            </ul>
        </h2>          
      </div>
    )
  }
}
