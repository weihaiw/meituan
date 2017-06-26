import React from 'react'
import '../icon/iconfont.css'
import '../App.css'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import Header from './header.js'
import Footer from './Footer.js'
import { connect } from 'react-redux'
class My extends React.Component{
  render(){
    var pathname = this.props.location.pathname
    console.log(this.props)
    return(
      <div className="home">
        <Header pathname = {pathname}/>
        <div className="main">
          <div className="center">
            <Link to="/login"><img alt="touxiang" src={require("../images/登录.svg")}/></Link>
            <p className="sign">{(this.props.comments === "") ? "未登录" : this.props.comments}</p>
            {/* <p>{this.props.comments}</p> */}
            <p className="phone"><img alt="kefu" src={require("../images/user-phone.da069e46.png")}/>客服电话：101-097-77 (服务时间：9:00-23:00)</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    comments:state.comments
  }
)
export default connect(mapStateToProps)(My);
