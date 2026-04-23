import React, { useState } from "react";
import './Course.css';

function EnrollmentDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);  // ✅ plain array instead of Map
  const [filterCourse, setFilterCourse] = useState("");
  const [newStudent, setNewStudent] = useState({ id: "", name: "", courses: "", gpa: "" });

  const addStudent = () => {
    const { id, name, courses, gpa } = newStudent;

    // ✅ Guard against empty fields
    if (!id || !name || !courses || !gpa) return;

    // ✅ Guard against duplicate IDs
    if (students.some(s => s.id === Number(id))) {
      alert("A student with this ID already exists.");
      return;
    }

    const student = {
      id: Number(id),
      name,
      enrolledCourses: [...new Set(courses.split(",").map(c => c.trim()))], // ✅ array, not Set
      gpa: Number(gpa)
    };

    setStudents(prev => [...prev, student]);
    setNewStudent({ id: "", name: "", courses: "", gpa: "" });
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));  // ✅ simple filter
  };

  const sortedStudents = [...students].sort((a, b) => b.gpa - a.gpa);

  const uniqueCourses = [...new Set(students.flatMap(s => s.enrolledCourses))]; // ✅ cleaner

  const filteredStudents = filterCourse
    ? sortedStudents.filter(s => s.enrolledCourses.includes(filterCourse))  // ✅ .includes() not .has()
    : sortedStudents;

  return (
    <div className="dashboard">
      <h2 id="main-heading">Course Enrollment Dashboard</h2>

      <div className="header-row">
        <input
          placeholder="Filter by course"
          value={filterCourse}
          onChange={e => setFilterCourse(e.target.value)}
        />
        <button onClick={() => setShowModal(true)}>Add Student</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <dialog open className="modal">
            <h3>Add Student</h3>
            <div className="inputFields">
              {["id", "name", "courses", "gpa"].map(field => (
                <input
                  key={field}
                  placeholder={field === "courses" ? "Courses (comma separated)" : field.toUpperCase()}
                  value={newStudent[field]}
                  onChange={e => setNewStudent({ ...newStudent, [field]: e.target.value })}
                />
              ))}
              <div className="modal-buttons">
                <button onClick={() => { addStudent(); setShowModal(false); }}>Add Student</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </dialog>
        </div>
      )}

      <div className="main-content">
        <div className="students-section">
          <h3>Students (Sorted by GPA)</h3>
          <div className="students-grid">
            {filteredStudents.map(student => (
              <div key={student.id} className="student-card">
                <div className="card-content">
                  <h4>{student.name}</h4>
                  <hr />
                  <p>ID: {student.id}</p>
                  <p>CGPA: {student.gpa}</p>
                  <p>Courses:</p>
                  <ul>
                    {student.enrolledCourses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => removeStudent(student.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className="courses-sidebar">
          <h3>Unique Courses</h3>
          <ul>
            {uniqueCourses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentDashboard;
