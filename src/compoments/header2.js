import React from 'react'
class Header2 extends React.Component{
  handleClick(){
    this.props.props.history.goBack()
  }
  render(){
    var pathname = this.props.props.location.pathname
    // console.log(this.props.props)
    return(
      <div>
        <h1>
          <span onClick={this.handleClick.bind(this)}><img alt="jiantou" src={require("../images/jian.svg")}/></span>
          {(pathname === "/search") ? "搜索"　: ""}
        </h1>
      </div>
    )
  }
}
export default Header2
