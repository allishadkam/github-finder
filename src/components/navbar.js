import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";
const navbar =({title})=> {
  
  
    return (
      <nav className='navbar bg-primary'>
        <h1> <i className='fa fa-github'/> {title}</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
  

  
}
navbar.defaultProps ={
    title:'u forgot'
  };
navbar.propTypes={
title:propTypes.string.isRequired
};
export default navbar
