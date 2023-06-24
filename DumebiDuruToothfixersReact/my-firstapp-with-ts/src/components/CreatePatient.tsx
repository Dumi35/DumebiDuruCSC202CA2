import React, { useState } from 'react';
import "./../styles/bulma.min.css"
import "./../styles/styles.css"
import axios from "axios" 
import { Link } from 'react-router-dom';

interface Patient{
  id?:number,
  firstName?:string,
  title?:string
}

const CreatePatient: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [matricNo, setMatricNo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const [address, setAddress] = useState('');

  const [patients, setPatients] = useState<Patient[]>([{}])


  /* {React.useEffect(()=>{
    axios.get<Patient[]>("http://localhost:3001/patients").then((response)=>{setPatients(response.data);console.log(response)});
  },[])}  */

    
    const postData = () => {
      axios.post<Patient>("http://localhost:3001/patients",{
        firstName,
        middleName,
        surname,
        dateOfBirth,
        dateOfRegistration,
        address
      })
      
    }
  
 
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    /* // Check form validities
    if (!firstName) {
      // Handle invalid first name
      return;
    }

    if (!surname) {
      // Handle invalid surname
      return;
    } */

    // Start the button spinner
    const submitButton = document.getElementById('submitCreateUserForm');
    if (submitButton) {
      submitButton.classList.add('is-loading');
    }


    
  };

  return (
    <div id='root'>
      <h2>Create Patient</h2>
      <div className="grid-container">
        
        

        {/* Form */}
        <div className="grid-item-row-2">
          
          <form className="box" id="createUserForm" onSubmit={handleSubmit}>
            <fieldset id="createUserFormFieldSet" className="container">
              <div className="field">
                <label className="label">First name:</label>
                <div className="control has-icons-right">
                  <input 
                    className="input"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Middle name:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="middleName"
                    name="middleName"
                    type="text"
                    placeholder="Middle name"
                    value={middleName}
                    onChange={event => setMiddleName(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Surname:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    required
                    value={surname}
                    onChange={event => setSurname(event.target.value)}
                  />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Date of birth:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    
                    placeholder="yyyy-mm-dd"
                    value={dateOfBirth}
                    onChange={event => setDateOfBirth(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date of Registration:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="dateOfRegistration"
                    name="dateOfRegistration"
                    type="date"
                    placeholder="Date of Registration"
                    required
                    value={dateOfRegistration}
                    onChange={event => setDateOfRegistration(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Home Address:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Home Address"
                    required
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <Link to="/records">
                    <button type="submit" id="submitCreateUserForm" onClick={postData}>
                      Submit
                    </button>
                  </Link>
                </div>
                <div className="control">
                  <button type="reset" className="button is-light is-small">
                    Clear
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div id="notification" className="notification container is-hidden animated slideInUp">
            <button className="delete"></button>
            <div id="notificationMessage">Notification Message</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatePatient;
