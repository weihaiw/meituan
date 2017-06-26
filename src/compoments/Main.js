import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { shops } from '../redux/action/user.js'
class Main extends React.Component{
  componentWillMount(){
    this.props.shops()
  }
  render(){
    // console.log(this.props.shop.shops)
    return(
      <div className="main">
        <div className="banner">
          <img alt="home" src={require("../images/bannertemp.e58ba3eb.jpg")}/>
        </div>
        <div className="nav clearfix">
          <a href="#">
            <img alt="美食" src={require("../images/9364491f122755cf5d8caff560cabeec6371.png.webp")}/>
            <span>美食</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/368e2cd7da106e2236a8d6096a8957b96874.png.webp")}/>
            <span>超市</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/3231ff9e68d4e13fd7f1901d742feb785976.png.webp")}/>
            <span>鲜果购</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/a8c3097c09508d79e417de79844438fa7016.png.webp")}/>
            <span>下午茶</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/09358b273dc7532e185c20f956d4482b6422.png.webp")}/>
            <span>正餐优选</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/2fc6f40817f68f81ab62c8749579dcaa6565.png.webp")}/>
            <span>美团专送</span>
          </a>  
          <a href="#">
            <img alt="美食" src={require("../images/17d1c39d68cfffa24334d81dfa8956136471.png.webp")}/>
            <span>夏日畅饮</span>
          </a>
          <a href="#">
            <img alt="美食" src={require("../images/ac286360b3b999e8cf616fab5949eb2b5876.png.webp")}/>
            <span>精选小吃</span>
          </a>
        </div>   
        <div className="shops">
          <div><span>所有商家</span></div>
          {
            (this.props.shop.shops) ?   
            (this.props.shop.shops.map(item => (
              <Link to={`/restaurant/${item._id}`} key={item._id}>
                <img alt="商户"　src={require("../images/dd26b0c54458e4f3dd9fd1185f34cda6458603.jpg.webp")}/>
                <span>{item.name}</span>              
              </Link>
            ))):""
          }      
        </div>     
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    shop:state.shop
  }
)
export default connect(mapStateToProps,{ shops })(Main)
