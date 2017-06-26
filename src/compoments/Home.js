import React from 'react'
import '../icon/iconfont.css'
import '../App.css'
// import axios from 'axios'
import Header from './header.js'
import Footer from './Footer.js'
import { user } from '../redux/action/user.js'
import { connect } from 'react-redux'
import { addPositions } from '../redux/action/addPosition.js'
import Main from './Main.js'
class Home extends React.Component{
  constructor(){
    super()
    this.state={
      name:""
    }
  }
  componentWillMount(){
    if(this.props.location.state){
      var id = this.props.location.state.id
      this.props.user(id)
    }else{
      
    }
    this.props.addPositions()
  }
  render(){

    var pathname = this.props.location.pathname
    return(
      <div className="home">
        <Header pathname = {pathname}/>
        
        <Main />
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    comments:state.comments,
    // content:state.content
  }
)
export default connect(mapStateToProps,{ user,addPositions })(Home)
// export default Home
