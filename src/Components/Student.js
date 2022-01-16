import React from 'react'

function Student(deleteStudent, student) {
    const student = props.student
    return (

        <div className="student">
            <p>{student.name}</p>
            <p>{student.lastName}</p>
            <ul>
                <li>phone number :{student.phoneNumber}</li>
                <li>power: {student.power}</li>
            </ul>
            <p className="delete" onClick={() => deleteStudent.id(student)}>delete</p>
        </div>

    )
}

export default Student
