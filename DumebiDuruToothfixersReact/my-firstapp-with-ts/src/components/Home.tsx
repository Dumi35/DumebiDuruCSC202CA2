import React, {useState} from 'react';
import styles from './../styles/styles.module.css'; 
import "./../styles/styles.css"
import CreatePatient from './CreatePatient';
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import axios from 'axios';


interface Patient{
  id?:number,
  title?:string
} 



const Home: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([{title:"12"}])
  
  
  {React.useEffect(()=>{
    axios.get<Patient[]>("http://localhost:3001/patients").then((response)=>{setPatients(response.data);});
  },[patients])}
  

  function DeletePatient(id:any){
    axios.delete(`http://localhost:3001/patients/${id}`)
  }

  function DeleteClinicRecord(id:any){
    axios.delete(`http://localhost:3001/clinic-records/${id}`)
  }

  const setData = (data:any) => {
    let { id, firstName, middleName, surname, matricNo, dateOfBirth, dateOfRegistration, address} = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('middleName', middleName);
    localStorage.setItem('surname', surname);
    localStorage.setItem('dateOfBirth', dateOfBirth);
    localStorage.setItem('dateOfRegistration', dateOfRegistration);
    localStorage.setItem('address', address);
    console.log(`tHIS IS ME ${localStorage.getItem('dateOfBirth')}`) 
  }
  
  

  return (
    <div>
      
      <div className={styles.toothImage}>ToothFixers Ltd</div>

      <div>
      <div>  
        {patients.map((data:any) => {
      return (
        <div className="userDetails">
          <li>
            <ul>Name: {`${data.firstName} ${data.surname}`}</ul>
            <ul>DOB: {data.dateOfBirth}</ul>
            <ul>Address: {data.address}</ul>
            <ul>Date of registration: {data.dateOfRegistration}</ul> 
            <ul>Matric No: 21120612455</ul>
            <div id="buttons">
              <Link to ="/read-records">
                <button>View Clinic Records</button>
              </Link>
              <Link to ="/Update">
              <button onClick={() => setData(data)}>Update</button>
              </Link>
              <button onClick={() => {DeletePatient(data.id);DeleteClinicRecord(data.id)}}>Delete</button>
            </div>
          </li>
        </div>
    )})}
      </div>
        
          <Link to="/create">
            <button id={styles["newUser"]} title="Create new user">+</button>
          </Link>
          
        
      </div>
    </div>
  );
};

export default Home;

interface PatientProps {
  patient: Patient;
}

function Patient({ patient }: PatientProps) {
  return <li>{patient.title}</li>;
}
