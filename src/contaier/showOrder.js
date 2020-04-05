import ShowOrder  from '../compounts/showOrder.js' //src\compounts\showOrder.js
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state.order
})

export default connect(mapStateToProps)(ShowOrder)
