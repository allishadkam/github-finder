import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const useritem =({user:{avatar_url,html_url,login}})=> {
  
  
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt="vvv" className='round-img' style={{width :"60px"}}></img>
        <h3>{login}</h3>
        <Link to={`/user/:${login}`} className="btn btn-dark btn-sn my-1">more</Link>
      </div>
    )
  
}
useritem.propTypes = {
  user: PropTypes.object.isRequired
};
export default useritem
