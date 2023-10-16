import React from 'react'
import MainUser from './MainUser'
import { useContext } from 'react'
import { UserContext } from '../App'

const Nomen = () => {

    const{user} = useContext(UserContext)

  return (
    <div>
    {/* datadan ilk 4 ismi cek. */}
    {user.slice(0,4).map((item)=>{
        return(
            <div style={{backgroundColor:"pink"}}>
                {item.login}
            </div>
        )
    })}
        <MainUser user={user}/>
    </div>
  )
}

export default Nomen