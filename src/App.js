import { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import HeaderAndTitle from './Components/HeaderAndTitle'
import Student from './Components/Student';
import StudentsList from './Components/StudentsList';

function App() {

  const [studentsInfo, setStudentsInfo] = useState([])
  const [show, setShow] = useState(false)

  const addStudent = ( newStudent) => {
    newStudent.id= setStudentsInfo.length + 1;
    setStudentsInfo([...studentsInfo, newStudent]);
  };

  const deleteStudent = (deleteStudent) =>{
    let tempStudents = studentsInfo.filter ((student) => student.id !== deleteStudent);
    setStudentsInfo(tempStudents);
  }

  return (

    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? (<StudentsList list={studentsInfo} />) : (<Form addStudent ={addStudent} />)}
    <Student studentsInfo={studentsInfo} deleteStudent={deleteStudent} />
    </div>
    
  );
}

export default App;
