import {createContext,useState} from 'react'


// implémentation 

// création d'un context
export const AuthContext = createContext(null)

// Provider : fournisseur d'informations et d'actions
export function AuthProvider({children}){
    // données
 const [users , setUsers] = useState([
    {
        id : 1,
        email : "admin",
        password : "admin",
        role : "admin"
    }
 ])

  const [userConnected , setUserConnected] = useState(null)
  
  // login
  const login = (email,password) => {
    
        const userToLog = users.find((u) => u.email === email && u.password === password);
    
        console.log(userToLog);
        
      if(userToLog){
          setUserConnected(userToLog)
          return userToLog
      }
  }
  
  // register
  const register = (user) => {
      if(!user){
            return null
        }else{
            user.id = users[users.length - 1].id + 1
              setUsers((prev) => [...prev,user])
              setUserConnected(user)
          }
        }

  // logout
  const logout = () => {
    setUserConnected(null)
  }
  
const getUserState = () => {
    return userConnected
}

// renvoyer certains éléments

return(
    <AuthContext.Provider value={{userConnected, login , register , logout ,getUserState}}>
        {children}
    </AuthContext.Provider>
)

}