import React from 'react'
import '../icon/iconfont.css'
import '../App.css'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import Header from './header.js'
import Footer from './Footer.js'
class Dingdan extends React.Component{
  constructor(){
    super()
    this.state={
      name:""
    }
  }
  render(){
    var pathname = this.props.location.pathname
    return(
      <div className="home">
        <Header pathname = {pathname}/>
        <div className="main"></div>
        <Footer />
      </div>
    )
  }
}
export default Dingdan
