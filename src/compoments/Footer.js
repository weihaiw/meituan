import React from 'react'
import {
NavLink
} from 'react-router-dom'
class Footer extends React.Component{
  render(){
    return(
      <footer>
        <NavLink exact activeClassName="shouye" to="/">
          <span>首页</span>
        </NavLink>
        <NavLink className="dingdan" activeStyle={{backgroundPosition:"0 -66px"}} to="/dingdan" >
          <span>订单</span>
        </NavLink>
        <NavLink className="my" activeStyle={{backgroundPosition:"0 -110px"}} to="/my">
          <span>我的</span>
        </NavLink>
      </footer>
    )
  }
}
export default Footer
