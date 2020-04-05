const login = 'login' ;
const logout = 'logout' ;

export const logIn = ( userName , password , isremeber )=>({type:login , userName , isremeber  })

export const logOut  = ( )=>({type:logout })
