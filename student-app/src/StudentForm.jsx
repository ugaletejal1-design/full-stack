import { useState } from "react";

function StudentForm({ onSubmit }) {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    department: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    setStudent({
      name: "",
      rollNumber: "",
      department: "",
      marks: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Student Registration</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Student Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="rollNumber"
        placeholder="Enter Roll Number"
        value={student.rollNumber}
        onChange={handleChange}
        required
      />

      <select
        name="department"
        value={student.department}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option value="Computer Engineering">Computer Engineering</option>
        <option value="IT">Information Technology</option>
        <option value="Mechanical">Mechanical Engineering</option>
        <option value="Civil">Civil Engineering</option>
        <option value="Electrical">Electrical Engineering</option>
      </select>

      <input
        type="number"
        name="marks"
        placeholder="Enter Marks (0-100)"
        min="0"
        max="100"
        value={student.marks}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit Details</button>
    </form>
  );
}

export default StudentForm;