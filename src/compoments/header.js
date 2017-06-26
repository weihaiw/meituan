import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Header extends React.Component{
  render(){
    let content = this.props.content;
    var pathname = this.props.pathname
    // console.log(this.props)
    return(
      <div className="header">
        <h1>{(pathname === "/") ? "美团外卖" : ((pathname === "/dingdan") ? "我的订单"　: ((pathname === "/my") ? "我的"　: ""))}</h1>
        {(pathname === "/") ? 
        <div className="top">
          <a href="#">
            <i className="iconfont icon-shape3"></i>
            {
                content.city?
                    <span>{content.street}.......</span>
                :content.errorPosition?
                    content.errorPosition
                :'加载中...'
              }
            <i className="iconfont icon-jiantou-copy"></i>
          </a>
          <Link to="/search" href="#">
            <i className="iconfont icon-sousuo-sousuo"></i>
            输入商家、商品名
          </Link>
        </div> : ""}
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    // comments:state.comments,
    content:state.content
  }
)
export default connect(mapStateToProps)(Header)
// export default Header
