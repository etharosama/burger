import NavBar from '../compounts/NavBar'
import { connect } from 'react-redux'
import { logOut} from '../actions/login.js' //src\actions\login.js

const mapStateToProps = state => ({
  ...state.togolle
})

const mapDispatchToProps = dispatch => ({
  logOut : ()=>  dispatch(logOut()) ,
})
export default connect(mapStateToProps , mapDispatchToProps )(NavBar)
