import React from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Sign extends React.Component{
  signUp1(e){
    e.preventDefault()
    var name = this.name.value
    var pass1 = this.pass1.value  
    var pass2 = this.pass2.value
    let self = this
    if(pass1 === pass2){
      axios.post('http://petapi.haoduoshipin.com/user/signup', {"username": name, "password": pass1})
      .then(function (response) {
        // console.log(response);
        var span = document.createElement("span")
        span.innerHTML = "密码输入正确"
        span.style.color = "red"      
        document.getElementById('reqPass').appendChild(span)
        self.props.history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });      
    }else{
      var err1 = document.createElement("span");  
      err1.innerHTML = "两次密码输入不一致";
      err1.setAttribute('className','err') 
      err1.style.color = "red"
      document.getElementById('reqPass').appendChild(err1)
    }
    console.log(pass1 === pass2)
  }
  render(){
    return(
      <div className="sign">
        <Link to="/" className="logo"></Link>
        <form onSubmit={this.signUp1.bind(this)}>
          <div>
            <label htmlFor="userName">用户名</label>
            <input type="text" id="userName" placeholder="" ref={(node) => this.name = node}/>            
          </div>
          <div>
            <label htmlFor="passName">创建密码</label>
            <input type="text" id="passName" placeholder=""ref={(node) => this.pass1 = node}/>
          </div>
          <div id="reqPass">
            <label htmlFor="passName">确认密码</label>
            <input type="text" id="passName2" placeholder="" ref={(node) => this.pass2 = node}/>
          </div>
            <input type="submit" id="login" value="同意以下协议并注册"/>            
        </form>
        {/* <a className="left">美团网用户协议</a> */}
        <p>©meituan.com京ICP证070791号京公网安备11010502025545号</p>
      </div>
    )
  }
}
export default Sign
