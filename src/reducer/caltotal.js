

const inialstate ={
  numberOfBread : 1 ,
  numberOfmeat : 0 ,
  numberOfvegtiabel : 0 ,
  numberOfsandawtich : 1 ,
  totalCost : 5
}

export  const order = (state = inialstate , action)=>{
  switch (action.type) {
    case 'number_Of_sandawtich_Increase':
      return {...state , numberOfsandawtich : state.numberOfsandawtich +1 }
    case 'number_Of_sandawtich_decrease':
      return {...state , numberOfsandawtich : state.numberOfsandawtich -1 }
    case 'number_Of_meat_Increase':
      return {...state , numberOfmeat : state.numberOfmeat +1 }
    case 'number_Of_meat_decrease' :
      return {...state , numberOfmeat : state.numberOfmeat -1 }
    case 'number_Of_Bread_Increase' :
      return {...state , numberOfBread : state.numberOfBread +1 }
    case 'number_Of_Bread_decrease':
      return {...state , numberOfBread : state.numberOfBread -1 }
    case 'number_Of_vegtiabel_Increase':
      return {...state , numberOfvegtiabel : state.numberOfvegtiabel +1 }
    case 'number_Of_vegtiabel_decrease'  :
      return {...state , numberOfvegtiabel : state.numberOfvegtiabel -1 }
    case 'calTotal'  :
      const {numberOfBread ,numberOfmeat ,numberOfvegtiabel, numberOfsandawtich}=state
      let total = numberOfsandawtich *(numberOfmeat*25 + numberOfvegtiabel*15 +numberOfBread*5) ;
      return {...state ,totalCost :total }
    case 'reset_action'  :
      console.log('in reducer');
      return {...inialstate}
    default:
      return {...state}

  }
}
