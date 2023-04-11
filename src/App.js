import axios from 'axios';
import React, { Fragment,useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Users from './components/user/users';
import User from './components/user/user';
import Search from './components/user/search';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/pages/About';

const App =()=> {
  const [users  ,setusers ]=useState([]);
  const [user  ,setuser ]=useState({});
  const [repos  ,setrepos ]=useState([]);
  const [loading  ,setloading ]=useState(false);
  const [alert  ,setalert ]=useState(null);
  
/* async componentDidMount(){
    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({users:res.data,loading:false})
  }*/

const search = async text =>{
  setloading(true);
  const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  setusers(res.data.items)
  setloading(false);
};


const getUser = async username =>{
  setloading(true);
  const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  setuser(res.data)
  setloading(false);
};

const getUserRepos = async username =>{
  setloading(true);
  const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
  setrepos(res.data)
  setloading(false);
};


const clear =()=>{
  setloading(true);
  setusers([]);
}

const showAlert =(msg,type)=>{
  setalert({ message:msg , type:type })
  setTimeout(() => {
    setalert(null);
  }, 3000);
}
 
    
      
      return (
        <Router>
          <div className="App">
            <Navbar title="github finder"/>
            <div className='container'>
            <Alert alert={alert}/>
            <Routes>
              <Route path='/' element={
                  <Fragment>
                    <Search searchUsers={search} 
                      clearuser={clear} 
                      showclear={users.length > 0}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users}/>
                  </Fragment>
                }
                
              
              />
             <Route path='/About' element={<About/>}/>
             <Route path='/user/:login' element={<User getUser={getUser} getUserRepos={getUserRepos} loading={loading} user={user} repos={repos} />
              
      }/>
            </Routes>
            </div>
          </div>
        </Router>
      
     );
    
    
 
}


export default App;
