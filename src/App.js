import './App.css';
import Section from './components/section/section';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

//import react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilterPage from './components/FilterPage/FilterPage';
import Login from './components/FilterPage/login';
import DoctorProfile from './components/DoctorProfile/doctorProfile';
function App() {
  return (
   
    <Router >
      <Routes>
        <Route exact path="/" element={ <Section/>}/>
        <Route path="/filter" element={ <FilterPage/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/doctor/:id" element={ <DoctorProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;