import { connect } from 'react-redux'
import LogInForm from '../compounts/logInForm.js'
import { logIn} from '../actions/login.js' //src\actions\login.js

const mapStateToProps = state => ({
  ...state.togolle
})

const mapDispatchToProps = dispatch => ({
  logIn : (userName)=>  dispatch(logIn(userName)) ,
})

export default connect(mapStateToProps , mapDispatchToProps )(LogInForm)
