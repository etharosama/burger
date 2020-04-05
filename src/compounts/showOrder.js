import React from 'react';
import breadtop from '../img/breadtop.svg' // src\img
import breadbottom from '../img/breadbottom.svg'
import meat from '../img/meat.svg'
import vogtabel from '../img/vogtabel.svg'
import './style/showOrder.css'

class ShowOrder extends React.Component {


  render(){
    const {numberOfBread, numberOfmeat , numberOfsandawtich , numberOfvegtiabel} = this.props
    const breadtop_img =
    <img className='img'  src = {breadtop} alt='breadTop'></img>

    const vogtabe_img =
    <img  className='img' src = {vogtabel} alt='breadTop'></img>

    const meat_img =
    <img className='img'  src = {meat} alt='breadTop'></img>

    const breadbottom_img =
    <img  className='img' src = {breadbottom} alt='breadTop'></img>

    return(
      <div   className= 'col-lg-6 col-sm-12 total '>
      {numberOfsandawtich ?
      <div className = 'conatiner'>
          { numberOfBread ?  breadtop_img : null}
          { numberOfvegtiabel ?  vogtabe_img  : null}
          { numberOfmeat ? meat_img : null }
          { numberOfvegtiabel ? vogtabe_img : null}
          { numberOfBread  ? breadbottom_img  : null }
      </div> :null }
      </div>
    )
  }
}
export default ShowOrder
