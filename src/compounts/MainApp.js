import React from 'react';
import NavBar from '../contaier/NavBar'
import OrderDtails from '../contaier/OrderDtails'  //src\contaier\OrderDtails.js
import ShowOrder from '../contaier/showOrder' //src\contaier\showOrder.js

class MainApp extends React.Component {


  render() {
    return (
      <div>
        <NavBar currentPage = 'order'/>
        <div className = 'row container-fluid' >
          <ShowOrder />
          <OrderDtails />
        </div>
      </div>
    );
  }
}

export default MainApp ;
