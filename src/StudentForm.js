import React, { useState } from 'react';
import './StudentForm.css'; 


function StudentForm() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student); 
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <label>
        Name changed:
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email changed:
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number changed:
        <input
          type="text"
          name="phoneNumber"
          value={student.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
