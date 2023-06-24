import React from 'react';
import styles from './styles/styles.module.css'; 
import "./styles/styles.css"
import CreatePatient from './components/CreatePatient';
import Home from './components/Home';
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import axios from 'axios';
import { link } from 'fs';
import UpdatePatient from './components/UpdatePatient';
import CreateClinicalRecords from './components/CreateClinicalRecords';
import ReadClinicalRecords from './components/ReadClinicalRecords';

const App: React.FC = () => {
  /* React.useEffect(()=>{
    //axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res=>{const animals=res.data.title; console.log(animals)})
   axios.get("http://localhost:3001/patients/1").then(res=>{const person=res.data; console.log(person)})
  })  */
  return (
        
        <Router>
          
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePatient/>} />
          <Route path="/records" element={<CreateClinicalRecords/>} />
          <Route path = "/update" element = {<UpdatePatient/>}/>
          <Route path = "/read-records" element={<ReadClinicalRecords/>}/>
          </Routes>
          
        </Router>
        
  );
};

export default App;
