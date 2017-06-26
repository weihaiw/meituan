import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component{
  login(e){
    e.preventDefault()
    var name = this.name.value
    var pass = this.pass.value
    let self = this
    axios.post('http://petapi.haoduoshipin.com/user/signin',{"username": name, "password": pass})
    .then(function (response) {
      // console.log(response);
      self.props.history.push("/",{id: response.data.userId});
    })
    .catch(function (error) {
      console.log(error);
      var span = document.createElement("span")
      span.innerHTML = "密码或者用户名输入不正确"
      span.style.color = "red"
      var err = document.getElementById('err')
      err.appendChild(span)
    });
  }
  render(){
    console.log(this.props)
    return(
      <div className="login">
        <Link to="/" href="#" className="logo"></Link>
        <p>账号登录</p>
        <form onSubmit={this.login.bind(this)}>
          <div>
            <i className="user"></i>
            <input type="text" id="userName" placeholder="美团账户(手机/用户名/邮箱)" ref={(node) =>this.name = node}/>            
          </div>
          <div id="err">
            <i className="pass"></i>
            <input type="text" id="passName" placeholder="请输入您的密码" ref={(node) =>this.pass = node}/>
          </div>
            <input type="submit" id="login" value="登录"/>            
        </form>
        <Link to="/sign" className="left">立即注册</Link>
        <a href="#" className="right">找回密码</a>
        <p>提示:未注册美团账号的手机号,登录时将自动注册美团账号,且代表您已同意  <a href="#">美团网用户协议</a></p>
      </div>
    )
  }
}
export default Login
