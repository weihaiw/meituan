import { combineReducers } from 'redux'
let comments = "";
function commentReducer(state= comments, action) {
  switch (action.type) {
    case 'username':
    console.log(action)
      return action.comments
    default:
      return state
  }
}
let content = {}
function position(state = content,action){
  switch (action.type) {
    case 'POSITION':
      return action.content
    default:
      return state
  }
}
let shop = []
function shops(state = shop,action){
  switch (action.type) {
    case 'SHOPS':
    // console.log(action)
      return action.shop
    default:
      return state
  }
}
let Foods = []
function allFoods(state = Foods,action){
  switch (action.type) {
    case 'FOODS':
      return action.Foods
    default:
      return state
  }
}
let num = 0
function numFoods(state = num,action){
  switch (action.type) {
    case 'NUM':
      return action.num
    default:
      return state
  }
}
let sum = 0
function sumFoods(state = sum,action){
  switch (action.type) {
    case 'SUM':
      return action.sum
    default:
      return state
  }
}
let products = []
function product(state = products,action){
  switch (action.type) {
    case 'PRODUCTS':
      return action.products
    default:
      return state
  }
}
const rootReducer = combineReducers({
  comments:commentReducer,
  content:position,
  shop:shops,
  Foods:allFoods,
  num:numFoods,
  sum:sumFoods,
  products:product
})
export default rootReducer
