import React from 'react'
import Useritem from './useritem'
import Spinner from '../spinner'
import PropTypes from 'prop-types'


const Users =({users,loading})=> {
    
   if (loading){
    return <Spinner/>
   }
   else{
    return (
      <div style={userstyle}>
        {users.map(u=>(
            <Useritem key={u.id} user={u}/>
        ))}
      </div>
    )
   }
    
  
}
const userstyle={
    display: "grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}
Users.propTypes ={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
    
}
export default Users
