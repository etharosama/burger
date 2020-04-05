import { connect } from 'react-redux'
import OrderDtails from '../compounts/OrderDtails'
import {
  numberOfsandawtichIncrease ,
  numberOfsandawtichDecrease ,
  numberOfMeatDecrease ,
  numberOfMeatIncrease ,
  numberOfBreadIncrease ,
  numberOfBreadDecrease ,
  numberOfvegtiabelDecrease ,
  numberOfvegtiabelIncrease ,
  totalCal
} from '../actions/caltotal.js' //src\actions\caltotal.js

const mapStateToProps = state => ({
  ...state.order
})

const mapDispatchToProps = dispatch => ({
  numberOfsandawtichIncrease : ()=>  dispatch(numberOfsandawtichIncrease()) ,
  numberOfsandawtichDecrease  : ()=>  dispatch(numberOfsandawtichDecrease()) ,
  numberOfMeatDecrease: ()=>  dispatch(numberOfMeatDecrease()),
  numberOfMeatIncrease: ()=>  dispatch(numberOfMeatIncrease()),
  numberOfBreadIncrease: ()=>  dispatch(numberOfBreadIncrease()),
  numberOfBreadDecrease: ()=>  dispatch(numberOfBreadDecrease()),
  numberOfvegtiabelDecrease: ()=>  dispatch(numberOfvegtiabelDecrease()),
  numberOfvegtiabelIncrease: ()=>  dispatch(numberOfvegtiabelIncrease ()),
  totalCal : ()=>  dispatch(totalCal())
})

export default connect(mapStateToProps , mapDispatchToProps )(OrderDtails)
