
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
<<<<<<< HEAD
import Sam from './components/about';
import Navbar from './components/navbar';
=======
import CardP from './components/cardP';
import CardList from './components/cardList';
>>>>>>> main

class App extends Component {
   
  render(  ) {
    return (
<<<<<<< HEAD
        <div className="App">
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* exact to say this is the main page only */}

            <Route path="/classone" element={<ClassOne />} />
            <Route path="/aboutus" element={<Sam />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
=======

      <div className='App'>
       
       <Routes>
             <Route exact path='/' element={<Home />}/> 
             {/* exact to say this is the main page only */}

                  <Route path='/classone' element={<ClassOne/>}/>
                                  
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/registration' element={<Registration/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/homepage' element={<HomePage/>}/>
                  <Route path='/cardp' element={<CardP/>}/>

                  <Route path='/cardlist' element={<CardList/>}/>


</Routes>


    </div>
>>>>>>> main
    );


  }
}
 

export default App;


