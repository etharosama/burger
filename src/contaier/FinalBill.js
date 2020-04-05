import { connect } from 'react-redux'
import FinalBill  from '../compounts/FinalBill.js' //src\compounts\FinalBill.js
import {
  reset_api
} from '../actions/caltotal.js'

const mapStateToProps = state => ({
  ...state.order , login :state.togolle.login
})

const mapDispatchToProps = dispatch =>{
  console.log('in coutair');
  return {
  reset_api : ()=>  dispatch(reset_api()) ,
}}

export default connect(mapStateToProps , mapDispatchToProps  )(FinalBill)
