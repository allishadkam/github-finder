import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../spinner';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Repos from '../repos/repos';
const User =({user,getUser,loading,getUserRepos,repos})=> {

    const {login} = useParams();
    let log=login.slice(1,)

    useEffect(()=>{getUser(log);getUserRepos(log)},[])
    
        
        //console.log(user.hireable)
       // console.log(log)
    const{avatar_url,hireable,location,name,bio,html_url,company,blog,followers,following,public_repos,public_gists}=user;
      
    if (loading) {
        return ( <Spinner/>   )
    }

    return(
      <Fragment>
        <Link to='/' className='btn btn-light' >Back to Search</Link>
        Hireable : {' '}
        {hireable ?<i className='fas fa-check text-success'></i>:<i className='fas fa-times-circle text-danger'></i>}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url}
            alt='photo'
            className='round-img'
            style={{width:'150px'}} />
            <h1>{name}</h1>
            <p>Location : {location}</p>
          </div>
          <div>
            {bio&&<Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
                </Fragment>}
            <a href={html_url} className='btn btn-dark my-1'>Go to Github</a>  
            <ul>
              <li>{login&&(<Fragment><strong>Username : </strong>{log}</Fragment>)}</li>
              <li>{company&&(<Fragment><strong>Company : </strong>{company}</Fragment>)}</li>
              <li>{blog&&(<Fragment><strong>Website : </strong>{blog}</Fragment>)}</li>
            </ul>  
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers : {followers}</div>
          <div className='badge badge-success'>Followings : {following}</div>
          <div className='badge badge-light'>public_Repos : {public_repos}</div>
          <div className='badge badge-dark'>public_Gists : {public_gists}</div>
        </div>
        <Repos repos={repos}/>
      </Fragment>
    )
}


User.propTypes={
  loading:PropTypes.bool.isRequired,
  user:PropTypes.object.isRequired,
  getUser:PropTypes.func.isRequired,
  getUserRepos:PropTypes.func.isRequired,
  repos:PropTypes.array.isRequired,
}
export default User
