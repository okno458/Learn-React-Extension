import React, { Component,lazy,Suspense } from 'react'
import { NavLink,Route } from 'react-router-dom'

// import Home from './Home'
// import About from './About'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
/**
 * 
    ## 2. lazyLoad

    ### 路由组件的lazyLoad

    ```js
      //1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
      const Login = lazy(()=>import('@/pages/Login'))
      
      //2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
      <Suspense fallback={<h1>loading.....</h1>}>
            <Switch>
                <Route path="/xxx" component={Xxxx}/>
                <Redirect to="/login"/>
            </Switch>
        </Suspense>
    ```
 * 
 * 
 */
export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
            <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    <NavLink to="/about" className="list-group-item">About</NavLink>
                    <NavLink to="/home" className="list-group-item">Home</NavLink>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    <Suspense fallback={ <h1>loading...</h1> }>
                      <Route path="/about" component={About}></Route>
                      <Route path="/home" component={Home}></Route>
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
       </div>
    )
  }
}
