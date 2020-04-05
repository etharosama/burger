import React from 'react';
import {
  Link
} from "react-router-dom";
import './style/FinalBill.css'

class FinalBill extends React.Component {
  handelsubmite = () =>{
    alert('resiving order ....... ')
    let director =  this.props.login ? '/' : "/LoginTotalPage"
    this.props.reset_api() ;
    setTimeout( () =>
      this.props.history.push(director)
       , 2000)


  }

  render (){
    const {
      totalCost ,
      numberOfBread ,
      numberOfmeat ,
      numberOfvegtiabel ,
      numberOfsandawtich ,
      login ,
      } = this.props
    return (
      <div className= 'col-lg-6 col-sm-12 totalBill'>
        {totalCost ===0 ?
          <div className= 'non-bill'>
            <h1>YOUR BILL IS FREE</h1>
            <h5>tells us how much you want to eat </h5>
            <Link to = '/' >
              <button
              className = 'btn btn-warning btn-lg btn-block'>
              submite order
             </button >
            </Link>
          </div>
          :
          <div className= 'bill'>
            <h2>YOUR BILL </h2>
            <h6> plase check Your order </h6>

            <table >
              <tr>
                <th>ecah sandwash has : </th>
                <th>number</th>
                <th>price per one </th>
                <th> price </th>
              </tr>
              <tr>
                  <td>bread </td>
                  <td>{numberOfBread }</td>
                  <td>{5}</td>
                  <td>{numberOfBread *5}</td>
              </tr>
              <tr>
                <td>meat </td>
                <td>{numberOfmeat}</td>
                <td>{25}</td>
                <td>{numberOfmeat *25}</td>
              </tr>
              <tr>
                <td>vegtiabel </td>
                <td>{numberOfvegtiabel }</td>
                <td>{15}</td>
                <td>{numberOfvegtiabel  *15}</td>
              </tr>

          </table>
          <p> in {numberOfsandawtich} sadwatch</p>
          <h5>your total bill is {totalCost } $</h5>
          {
            login ?
            <Link  >
              <button onClick ={this.handelsubmite}
              className = 'btn btn-warning btn-lg btn-block'>
                order now
             </button >
            </Link>
            :
            <Link onClick ={this.handelsubmite} >
              <button
              className = 'btn btn-warning btn-lg btn-block'>
                please log in to order
             </button >
            </Link>
          }

          </div>
        }
      </div>
    )
  }
}

export default FinalBill
