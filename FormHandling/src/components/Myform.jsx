
import React, { useState } from "react";

    function Myform (){

        function ChangeHandler(event){

            const {name, value, checked, type} = event.target;

            setformData( (prevformData) =>{

                if (type === "radio" || type === "checkbox") {
                    return {
                      ...prevformData,
                      [name]: checked ? value : "",
                    };
                  } 
                  else {
                    return {
                      ...prevformData,
                      [name]: value,
                    };
                  }
            }
            )
        }

        function SubmitHandler (event){
            event.preventDefault();
            console.log(formData)

        }

        const [formData, setformData] = useState(
            {
                patientname : "",
                patientage : "",
                patientGender : "",
                pateientContactNumber : "",
                patientEmail : "",
                PrescriptionDate : "",
                doctorName : "",
                drugName : "",
                drugDosage : "",
                FrequencyIntake : "",
                PharmacyName : "",
                patientAllergies : "",
                paymentMethod : "",
            }
        )



        return(
            <div>

                <h1>Patient Prescription Form</h1>

                <form onSubmit={SubmitHandler}>
                <label>Patient Name</label>
                <input
                type="text" 
                placeholder="Enter your Full Name"
                name="patientname"
                value={formData.patientname}
                onChange={ChangeHandler}/>


                <br />
                <br />


                <label>Patient Age</label>
                <input
                type="number" 
                placeholder="Enter your Age"
                name="patientage"
                value={formData.patientage}
                onChange={ChangeHandler}/>

                <br />
                <br />

                <label>Patient Gender</label>

                <select
                name="patientGender" 
                value={formData.patientGender}
                onChange={ChangeHandler}>
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">Female</option>
                <option value="other">Prefer Not To Say</option>
                </select>
                
                <br />
                <br />

                <label>Patient Contact Number</label>
                <input 
                type="tel" 
                placeholder="Enter your Contact Number"
                name="pateientContactNumber" 
                value={formData.pateientContactNumber} 
                onChange={ChangeHandler}/>
                
                <br />
                <br />

                <label>Email Address</label>

                <input 
                type="email" 
                placeholder="Enter your email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={ChangeHandler}/>

                <br />
                <br />

                <label>Prescription Date</label>

                <input 
                type="date" 
                name="PrescriptionDate"
                value={formData.PrescriptionDate}
                onChange={ChangeHandler}/>

                <br />
                <br />

                <label>Doctor Name</label>
                <input
                type="text" 
                placeholder="Enter Doctor Full Name"
                name="doctorName"
                value={formData.doctorName}
                onChange={ChangeHandler}/>

                <br />
                <br />

                <label>Drug Name</label>
                <input
                type="text" 
                placeholder="Enter Drug Name"
                name="drugName"
                value={formData.drugName}
                onChange={ChangeHandler}/>
                
                <br />
                <br />

                <label>Drug Dosage</label>

                <select
                name="drugDosage" 
                value={formData.drugDosage}
                onChange={ChangeHandler}>
                <option value="">Select Dosage</option>   
                <option value="100mg">100mg</option>
                <option value="250mg">250mg</option>
                <option value="500mg">500mg</option>
                <option value="1000mg">1000mg</option>
                </select>
                                
                <br />
                <br />

                <label>Frequency of Intake</label>

                <select
                name="FrequencyIntake" 
                value={formData.FrequencyIntake}
                onChange={ChangeHandler}>
                <option value="">Select Intake</option>
                <option value="Every_6_Hours">Every 6 Hours</option>
                <option value="Once_a_Day">Once a Day</option>
                <option value="Twice_a_Day">Twice a Day</option>
                
                </select>
                
                <br />
                <br />

                <label>Pharmacy Name</label>
                <input
                type="text" 
                placeholder="Enter Pharmacy Name"
                name="PharmacyName"
                value={formData.PharmacyName}
                onChange={ChangeHandler}/>

                <br />
                <br />

                <label>Allergies</label>

                <br />

                <textarea 
                name="patientAllergies" 
                value={formData.patientAllergies}
                placeholder="Any Allergies"
                rows="4" cols="40"
                onChange={ChangeHandler}>
                
                </textarea>

                <br />
                <br />

                <label>Payment methods</label>
                <br />

                <input 
                type="radio" 
                name="paymentMethod"
                value="Cash"
                checked={formData.paymentMethod === "Cash"}
                onChange={ChangeHandler}  />
                <label>Cash</label>

                <br />

                <input 
                type="radio" 
                name="paymentMethod"
                value="Credit Card"
                checked={formData.paymentMethod === "Credit Card"}
                onChange={ChangeHandler}  />
                <label>Credit Card</label>

                <br />

                <input 
                type="radio" 
                name="paymentMethod"
                value="insurance"
                checked={formData.paymentMethod === "insurance"}
                onChange={ChangeHandler}/>
                <label>insurance</label>

                <button type="submit">Submit</button>

                </form>
            </div>
        )
    }

export default Myform;