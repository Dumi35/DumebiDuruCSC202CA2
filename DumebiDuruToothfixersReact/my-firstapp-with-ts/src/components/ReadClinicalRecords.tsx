import React, {useState} from 'react';
import styles from './../styles/styles.module.css'; 
import "./../styles/styles.css"
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import axios from 'axios';


interface Record{
  id?:number,
  title?:string,
  clinicDate?:string,
  natureOfAilment?:string,
  medicinePrescribed?:string,
  procedureUndertaken?:string,
  dateOfNextAppointment?:string
} 



const ReadClinicalRecords: React.FC = () => {
  const [record, setRecord] = useState<Record>({title:"12"})
  const [id, setID] = useState<any>('');

  {React.useEffect(() => {
    setID(localStorage.getItem('ID'));
    }, [])} 
  
  {React.useEffect(()=>{
    axios.get<Record>(`http://localhost:3001/clinic-records/${id}`).then((response)=>{setRecord(response.data);console.log(record)});
  },[])}
  
  const filteredRecords= record;

  return (
    <div>
      
      <div className={styles.toothImage}>ToothFixers Ltd</div>

      <div>
      <div>  
          
      
        <div className="userDetails">
          <li>
            
            <ul>Clinic Date: {filteredRecords.clinicDate} </ul>
            <ul>Nature of Ailment: {filteredRecords.natureOfAilment}</ul>
            <ul>Medicine Prescribed: {filteredRecords.medicinePrescribed}</ul>
            <ul>Procedure Undertaken: {filteredRecords.procedureUndertaken}</ul> 
            <ul>Date of Next Appointment: {filteredRecords.dateOfNextAppointment}</ul>
            <div id="buttons">
              <Link to ="/">
              <button>Back</button>
              </Link>
            </div>
          </li>
        </div>
     
      </div>
        
          
        
      </div>
    </div>
  );
};

export default ReadClinicalRecords;


