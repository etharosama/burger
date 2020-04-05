import React from 'react';
import NavBar from '../contaier/NavBar'
import ShowOrder from '../contaier/showOrder'
import FinalBill from '../contaier/FinalBill'

class ShowOrderFinal extends React.Component {
  render(){
    console.log(this.props.roter.history);
    return (
      <div>
        <NavBar currentPage = 'bill'/>
        <div className = 'row container-fluid' >
        <ShowOrder  />
        <FinalBill history = {this.props.roter.history}/>
        </div>
      </div>
    )
  }
}
export default ShowOrderFinal
