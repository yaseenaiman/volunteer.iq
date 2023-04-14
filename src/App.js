
import { Component } from 'react';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ClassOne from './components/classOne';
import Login from './components/login';
import Registration from './components/registration';
import Register from './components/register';
import HomePage from './components/homePage';

class App extends Component {
   
  render(  ) {
    return (

      <div className='App'>
       
       <Routes>
             <Route exact path='/' element={<Home />}/> 
             {/* exact to say this is the main page only */}

                  <Route path='/classone' element={<ClassOne/>}/>
                                  
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/registration' element={<Registration/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/homepage' element={<HomePage/>}/>


</Routes>


    </div>
    );


  }
}
 

export default App;


