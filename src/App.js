import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar.component';
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (   
    <Router>
      <div className='container'>
        <NavBar />
        <br/>
          <Routes>                
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />        
          </Routes>
      </div>
    </Router>     
  );
}

export default App;