import React from 'react';
import {
  Link
} from "react-router-dom";
import './style/OrderDtails.css' //src\compounts\style\OrderDtails.css

class OrderDtails extends React.Component {


  handelPanding =()=>{
    this.props.totalCal() ;

  }

  render(){
    const {
      numberOfBread , numberOfmeat ,  numberOfvegtiabel , numberOfsandawtich ,
      numberOfsandawtichIncrease , numberOfsandawtichDecrease ,
      numberOfMeatDecrease ,numberOfMeatIncrease , numberOfBreadIncrease ,
      numberOfBreadDecrease ,numberOfvegtiabelDecrease, numberOfvegtiabelIncrease
       }=this.props
    return(
      <div className= 'col-lg-6 col-sm-12 totalOrder' >
        <div>
          <p > number of sandwich : </p>
          <button style = {this.style_btn}
                  className = 'btn btn-warning'
                  onClick = {numberOfsandawtichDecrease}> - </button>
          <span > {numberOfsandawtich } </span>
          <button
                  onClick = {numberOfsandawtichIncrease}
             className = 'btn btn-warning' > + </button>
        </div>

        <div>
          <p > number of meat : </p>
          <button
             onClick = {numberOfMeatDecrease}
              className = 'btn btn-warning' > - </button>
          <span> {numberOfmeat} </span>
          <button
            onClick = {numberOfMeatIncrease }
            className = 'btn btn-warning'> + </button>
        </div>

        <div>
          <p > number of bair of Bread : </p>
          <button
            onClick = {numberOfBreadDecrease}
            className = 'btn btn-warning' > - </button>
          <span> {numberOfBread  } </span>
          <button
           onClick = {numberOfBreadIncrease}
           className = 'btn btn-warning' > + </button>
        </div>

        <div>
          <p > number of bair of vegtiabel  : </p>
          <button onClick = {numberOfvegtiabelDecrease}
            className = 'btn btn-warning' > - </button>
          <span> {numberOfvegtiabel  } </span>
          <button
            onClick = {numberOfvegtiabelIncrease}
            className = 'btn btn-warning' > + </button>
        </div>

        <Link to = '/ShowOrderFinal' onClick = {this.handelPanding }>
          <button
          className = 'btn btn-warning btn-lg btn-block'>
          submite order
         </button >
        </Link>
      </div>
    )
  }
}
export default OrderDtails  ;
