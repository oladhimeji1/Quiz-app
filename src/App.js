import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import './fonts/font-awesome.css'
import AdminLogin from './components/AdminLogin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './components/Result';
import { useState } from 'react';
import Admin from './components/adminPage/Admin';

function App() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const onAdd = (data) =>{
    setName(data.resName)
    setId(data.id)
  }
 
  return (
    <Router>
      <div className="content">
          <Routes>
            <Route element={ <WelcomePage onAdd={onAdd}/> } exact path="/" />
            <Route element={ <AdminLogin /> } path="/admin-login" />
            <Route element={ <Admin /> } path="/admin-page" />
            <Route element={ <Home resid={id} /> } path="/quize" />
            <Route element={ <Result /> } path="/result/:result" />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
