import axios from 'axios'

export const user = (id) => (
  dispatch => {
    axios.get(`http://petapi.haoduoshipin.com/user/${id}`)
      .then( res => dispatch({ type: 'username', comments: res.data.user.username }) )
  }
)
export const shops = () => (
  dispatch => {
    axios.get('http://petapi.haoduoshipin.com/shops')
      .then( res => dispatch({ type: 'SHOPS', shop:res.data }))
  }
)
export const allFood = () => (
  dispatch => {
    axios.get('http://petapi.haoduoshipin.com/products')
      .then( res => dispatch({ type: 'FOODS', Foods:res.data.products }))
  }
)
export const product = () => (
  dispatch => {
    axios.get('http://petapi.haoduoshipin.com/cat/5941f8193dfb741ebf5efb5d/products')
      .then(res => dispatch({ type:"PRODUCTS",products:res.data.products}))
  }
)
// dispatch({ type:"PRODUCTS",products:res.data.products})
// dispatch({ type: 'FOODS', shop:res.data.products })
// export { user,shops }
// dispatch({ type: 'SHOPS', shop:res.data.shops })
