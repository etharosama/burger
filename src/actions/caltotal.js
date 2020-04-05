// const state ={
//   numberOfBread : 1 ,
//   numberOfmeat : 0 ,
//   numberOfvegtiabel : 0 ,
//   numberOfsandawtich : 1 ,
//   totalCost : 0
// }


const number_Of_sandawtich_Increase = 'number_Of_sandawtich_Increase' ;
const number_Of_sandawtich_decrease = 'number_Of_sandawtich_decrease' ;

const number_Of_meat_Increase = 'number_Of_meat_Increase' ;
const number_Of_meat_decrease = 'number_Of_meat_decrease' ;

const number_Of_Bread_Increase = 'number_Of_Bread_Increase' ;
const number_Of_Bread_decrease = 'number_Of_Bread_decrease' ;

const number_Of_vegtiabel_Increase = 'number_Of_vegtiabel_Increase' ;
const number_Of_vegtiabel_decrease = 'number_Of_vegtiabel_decrease' ;
const total_Cal = 'calTotal'
const reset_action = 'reset_action'

// ---------------------- actions ----------------- //

export const numberOfsandawtichIncrease =()=>({type: number_Of_sandawtich_Increase})

export const numberOfsandawtichDecrease =()=>({type: number_Of_sandawtich_decrease})

export const numberOfMeatDecrease =()=>({type: number_Of_meat_decrease})

export const numberOfMeatIncrease =()=>({type: number_Of_meat_Increase})

export const numberOfBreadIncrease =()=>({type: number_Of_Bread_Increase})

export const numberOfBreadDecrease =()=>({type:number_Of_Bread_decrease})

export const numberOfvegtiabelDecrease =()=>({type:number_Of_vegtiabel_decrease})

export const numberOfvegtiabelIncrease =()=>({type:number_Of_vegtiabel_Increase})

export const totalCal =()=>({type:total_Cal })

 const reset =()=>({
  type:reset_action
})

 export const reset_api =()=>{
   console.log('in action');
   return dispatch =>{
     console.log('in dispatch');
     setTimeout(()=>{

       dispatch ( reset()) ;
     },1000)
   }}
