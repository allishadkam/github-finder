import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search=({setAlert,searchUsers,showclear,clearuser})=> {
    const [text,settext]=useState('');

  
    
 const onchange =e =>{
    settext(e.target.value)
}

 const onSubmit=e=>{
    e.preventDefault();
    if (text==='') {
      setAlert('please enter someting','light');
    } else {
      searchUsers(text);
    }
    
}

  
   
    return (
      <div>
        <form className='form' onSubmit={onSubmit}>
            <input type="text" name="text" placeholder="search user" value={text} onChange={onchange}></input>
            <input type="submit" value="search" className="btn btn-dark btn-block" ></input>
        </form>
        {showclear&&(<button className='btn btn_light btn-block' onClick={clearuser}>clear</button>)}
        
      </div>
    )
  
}

Search.propTypes ={
  searchUsers : PropTypes.func.isRequired,
  clearuser : PropTypes.func.isRequired,
  showclear : PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired,
}

export default Search
