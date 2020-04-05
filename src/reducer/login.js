const initalState = {
  login : window.localStorage.getItem('username_ethar_creation') === null ?  false  :  true ,
  userName : window.localStorage.getItem('username_ethar_creation') || ''
}

export const togolle =(state = initalState , action)=>{

  switch (action.type) {
    case 'login':
        window.localStorage.setItem('username_ethar_creation' , action.userName) ;
      return {...state  , login : !state.login , userName : action.userName  }
    case 'logout' :
        window.localStorage.clear('username_ethar_creation' ) ;
        return {login :   false ,userName:''  }
    default:
  return {...state   }
  }
}
