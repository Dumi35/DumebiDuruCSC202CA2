import React, { useState } from 'react';
import "./../styles/bulma.min.css"
import "./../styles/styles.css"
import axios from "axios" 
import { Link } from 'react-router-dom';


const CreateClinicalRecords: React.FC = () => {
  const [clinicDate, setClinicDate] = useState('');
  const [natureOfAilment, setNatureOfAilment] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [procedureUndertaken, setProceedureUndertaken] = useState('');
  const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');

    
  const postData = () => {
    axios.post("http://localhost:3001/clinic-records",{
      clinicDate,
      natureOfAilment,
      medicinePrescribed,
      procedureUndertaken, 
      dateOfNextAppointment 
    })
    
  }
  
 
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    

    // Start the button spinner
    const submitButton = document.getElementById('submitCreateUserForm');
    if (submitButton) {
      submitButton.classList.add('is-loading');
    }

    
  };

  return (
    <div id='root'>
      <h2>Create Clinic Records</h2>
      <div className="grid-container">
        

        {/* Form */}
        <div className="grid-item-row-2">
          
          <form className="box" id="createUserForm" onSubmit={handleSubmit}>
            <fieldset id="createUserFormFieldSet" className="container">
              <div className="field">
                <label className="label">Clinic Date:</label>
                <div className="control has-icons-right">
                  <input 
                    className="input"
                    id="clinicDate"
                    name="clinicDate"
                    type="date"
                    placeholder="yyyy-mm-dd"
                    required
                    value={clinicDate}
                    onChange={event => setClinicDate(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nature of ailment:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="natureOfAilment"
                    name="natureOfAilment"
                    type="text"
                    placeholder="Nature Of Ailment"
                    value={natureOfAilment}
                    onChange={event => setNatureOfAilment(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Medicine Prescribed:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="medicinePrescribed"
                    name="medicinePrescribed"
                    type="text"
                    placeholder="Medicine Prescribed"
                    required
                    value={medicinePrescribed}
                    onChange={event => setMedicinePrescribed(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Proceedure Undertaken:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="procedureUndertaken"
                    name="procedureUndertaken"
                    type="text"
                    placeholder="procedureUndertaken"
                    required
                    value={procedureUndertaken}
                    onChange={event => setProceedureUndertaken(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date of next appointment:</label>
                <div className="control has-icons-right">
                  <input
                    className="input"
                    id="dateOfNextAppointment"
                    name="dateOfNextAppointment"
                    type="date"
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    placeholder="yyyy-mm-dd"
                    value={dateOfNextAppointment}
                    onChange={event => setDateOfNextAppointment(event.target.value)}
                  />
                </div>
              </div>
              

              <div className="field is-grouped">
                <div className="control">
                <Link to="/">
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

export default CreateClinicalRecords;
