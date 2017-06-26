import React from 'react'
import Header2 from './header2.js'
import axios from 'axios'
class Search extends React.Component{
  constructor(){
    super()
    this.state={
    data:[]
    }
  }
  handleClick(e){
    e.preventDefault()
    let value = this.input.value
    let self = this
    axios.post('http://petapi.haoduoshipin.com/shop/search',{"key": value})
    .then(function (response) {
      self.setState({data:[...response.data.shops]})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  submit(e){
    e.preventDefault()
  }
  render(){
    return(
      <div className="search">
        <Header2 props={this.props}/>
        <div>
          <form onSubmit={this.submit.bind(this)}>
            <div>
              <i className="iconfont icon-sousuo-sousuo"></i>
              <input type="text" id="search1" placeholder="请输入商家或商品名称" 
                ref={(node) => this.input = node}
                onChange={this.handleClick.bind(this)}
              />
              <input type="submit" id="search2" value="搜索"/>          
            </div>
          </form>
          <div>
            {this.state.data.map(item => (
              <div key={item._id} className="box">
                <img alt="dianpu" src={require("../images/dd26b0c54458e4f3dd9fd1185f34cda6458603.jpg.webp")}/>
                <span>{item.name}</span>
                <i className="iconfont icon-jiantou-copy"></i>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    )
  }
} 
export default Search
