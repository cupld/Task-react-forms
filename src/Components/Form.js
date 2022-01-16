import React from 'react'
import SideInfo from './SideInfo'
import {useState} from 'react'

// const [student, setStudent] = useState("");
// const handleChange = (e) =>{
//     setTask({...task, [e.targwe.name]: e.targer.value });
// };
// const handleSubmit = (e) => {
//     e.preventDefault();

// }

function Form({addStudent}) {
const [student, setStudent] = useState({});

const handleChange = (e)=>{
    setStudent({...student, [e.target.name]: e.target.value});
};

const handleSubmit = (e) =>{
    e.preventDefault();
    addStudent(student);
    setStudent({name:""});
};
    return (
        <div className="form-page">

        <form onSubmit={handleSubmit}> 
        
        Enter your name:
        <input name="name" onChange={handleChange} />
    
        Enter your LastName:
        <input name="lastName" onChange={handleChange} />

        Enter your Phonenumber:
        <input name="phoneNumber" onChange={handleChange} />
      Enter your Power:
        <input name="power" />
      
      Enter your Email Address:
        <input name="emailAddress" onChange={handleChange} />
    
     <button type="submit">Submit</button>
            </form>
            <SideInfo />

        </div>
    )
}

export default Form
