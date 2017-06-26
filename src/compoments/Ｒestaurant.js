import React from 'react'
import axios from 'axios'
import Tabs from 'antd/lib/tabs'
import Anchor from 'antd/lib/tabs'
import 'antd/dist/antd.css';
import '../App.css'
import { allFood } from '../redux/action/user.js'
import { product } from '../redux/action/user.js'
import { connect } from 'react-redux'
import store from '../redux/store.js'
const { Link } = Anchor;
const TabPane = Tabs.TabPane;
class Restaurant extends React.Component{
  constructor(){
    super()
    this.state={
      tabPosition: 'top',
      shop:[],
      cats:[]
    }
  }
  componentWillMount(){
    let id = this.props.match.params.id
    let self = this
    axios.get(`http://petapi.haoduoshipin.com/shops`)
      .then( res => {
        const shop = res.data.shops.filter((shop) => shop._id === id);
        self.setState({shop:[...shop]})
      }            
      )
    axios.get(`http://petapi.haoduoshipin.com/shop/${id}/cats`)
      .then( res => self.setState({cats:res.data.cats}))    
    this.props.allFood()
    this.props.product()
  }
  handleClick(){
    this.props.history.goBack()
  }
  addHandleClick(event){
    var div = event.target.parentNode.parentNode
    // console.log(div)
    div.querySelectorAll(".reduce")[0].style.display = "block"
    var num = Number(div.querySelectorAll("span")[0].innerHTML) + 1
    div.querySelectorAll("span")[0].innerHTML = num
    store.dispatch({ type: 'NUM', num: num })
    var price = div.parentNode.querySelectorAll(".price")[0].innerText
    price = price.replace("￥","")
    var sum = this.props.sum + Number(price)
    store.dispatch({type:"SUM",sum:sum})
    if(sum){
      document.querySelectorAll('i.emptys')[0].style.display = "none"
      document.querySelectorAll('span.emptys')[0].style.display = "none"
      document.querySelectorAll('a.emptys')[0].style.display = "none"
      document.querySelectorAll('i.full')[0].style.display = "inline-block"
      document.querySelectorAll('span.full')[0].style.display = "inline-block"
      document.querySelectorAll('a.full')[0].style.display = "inline-block"
      document.querySelectorAll(".total")[0].innerHTML = sum    
    }
  }
  redHandleClick(event){
    var div = event.target.parentNode.parentNode
    var price = div.parentNode.querySelectorAll(".price")[0].innerText
    price = price.replace("￥","")
    var sum = this.props.sum - Number(price)
    store.dispatch({type:"SUM",sum:sum})
    if(this.props.num===1 && sum===0){
      document.querySelectorAll('i.emptys')[0].style.display = "inline-block"
      document.querySelectorAll('span.emptys')[0].style.display = "inline-block"
      document.querySelectorAll('a.emptys')[0].style.display = "inline-block"
      document.querySelectorAll('i.full')[0].style.display = "none"
      document.querySelectorAll('span.full')[0].style.display = "none"
      document.querySelectorAll('a.full')[0].style.display = "none"
      var div = event.target.parentNode.parentNode
      div.querySelectorAll(".reduce")[0].style.display = "none"
      div.querySelectorAll("span")[0].innerHTML = ""
    }else{
      var div = event.target.parentNode.parentNode
      var num = div.querySelectorAll("span")[0].innerHTML = this.props.num - 1
      store.dispatch({ type: 'NUM', num: num })
    }
  }
  render(){
    console.log(this.props)
    return(
      <div className="restaurant">
        <h1 className="clearfix">
          <span onClick={this.handleClick.bind(this)}><img alt="jiantou" src={require("../images/jian.svg")}/></span>
          {(this.state.shop) ? this.state.shop.map(item => (
          <span key={item._id}>{item.name}</span>
        )) : ""}</h1>
        <Tabs tabPosition={this.state.tabPosition} style={{width:"100%"}}>
          <TabPane tab="点菜" key="1"　style={{width:"30%"}}>
            <div className="res-main">
              <div className="tag">
                {/* <Anchor affix={false}> */}
                  {/* <Link className="tag-inner action" href="#components-anchor-demo-basic" title="Basic demo" ><span className="tag-text">所有菜品</span></Link> */}
                  {/* <div  ></div> */}
                {/* </Anchor> */}
                <div className="tag-inner action" ><span className="tag-text">所有菜品</span></div>
                {this.state.cats.map(item => (
                  <div className="tag-inner" key={item._id}><span className="tag-text">{item.name}</span></div>
                ))}
              </div>
              <div className="foodlist">
                <div className="all">
                  <h3 >所有菜品</h3>
                  {this.props.Foods.map(item => (
                    <div className="food" key={item._id} style={{position:"relative"}}>
                      <p style={{position:"relative"}}>
                        <img alt="food" src={item.poster}/>
                        <span className="name" >{item.name}</span>
                        <span style={{position:"absolute",top:"20px",left:"72px"}}>月售 100</span>
                        <span style={{marginLeft:"10px",position:"absolute",top:"20px",left:"120px"}}>赞 ０</span>
                        <span className="price">￥{item.price}</span>
                      </p>
                      <div>
                        <a href="#" className="reduce" onClick={this.redHandleClick.bind(this)}><i></i></a>
                        <span className="num"></span>
                        <a href="#" className="add" onClick={this.addHandleClick.bind(this)}><i></i></a>                      
                      </div>
                    </div>              
                  ))}
                  {this.props.products.map(item => (
                    <div>
                      <h3 key={item._id}>{item.name}</h3>
                      <div className="food" style={{position:"relative"}}>
                        <p style={{position:"relative"}}>
                          <img alt="food" src={item.poster}/>
                          <span className="name" >{item.name}</span>
                          <span style={{position:"absolute",top:"20px",left:"72px"}}>月售 100</span>
                          <span style={{marginLeft:"10px",position:"absolute",top:"20px",left:"120px"}}>赞 ０</span>
                          <span className="price">￥{item.price}</span>
                        </p>
                        <div>
                          <a href="#" className="reduce" onClick={this.redHandleClick.bind(this)}><i></i></a>
                          <span className="num"></span>
                          <a href="#" className="add" onClick={this.addHandleClick.bind(this)}><i></i></a>                      
                        </div>
                      </div>                       
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottom">                
                <p>
                  <i className="emptys"></i>
                  <i className="full"></i>
                  <span className="emptys">购物车空空如也～</span>
                  <span className="full">
                    <span className="total">{this.props.sum}</span>
                    <span>配送费以订单为准</span>                    
                  </span>
                  <a　className="emptys">￥20元起送</a>
                  <a　className="full">去结算</a>
              </p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="评价" key="2"　style={{width:"30%"}}></TabPane>
          <TabPane tab="商家" key="3"　style={{width:"30%"}}></TabPane>
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    Foods:state.Foods,
    num:state.num,
    sum:state.sum,
    products:state.products
  }
)
export default connect(mapStateToProps,{ allFood,product })(Restaurant)
// export default Restaurant
