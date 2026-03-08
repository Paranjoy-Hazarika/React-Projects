import React, { useState } from "react";

export default function EnrollmentDashboard() {

  // State: Map of students
  const [students, setStudents] = useState(new Map());

  const [filterCourse, setFilterCourse] = useState("");

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    courses: "",
    gpa: ""
  });

  // Add student
  const addStudent = () => {

    const courseSet = new Set(
      newStudent.courses.split(",").map(c => c.trim())
    );

    const student = {
      id: Number(newStudent.id),
      name: newStudent.name,
      enrolledCourses: courseSet,
      gpa: Number(newStudent.gpa)
    };

    const newMap = new Map(students);

    newMap.set(student.id, student);

    setStudents(newMap);

    setNewStudent({ id: "", name: "", courses: "", gpa: "" });
  };

  // Remove student
  const removeStudent = (id) => {

    const newMap = new Map(students);

    newMap.delete(id);

    setStudents(newMap);
  };

  // Convert Map -> Array
  const studentArray = [...students.values()];

  // Sort by GPA (descending)
  const sortedStudents = [...studentArray].sort(
    (a, b) => b.gpa - a.gpa
  );

  // Unique courses using reduce + Set
  const uniqueCourses = studentArray.reduce((acc, student) => {

    student.enrolledCourses.forEach(course => acc.add(course));

    return acc;

  }, new Set());

  // Filter students by course
  const filteredStudents = filterCourse
    ? sortedStudents.filter(student =>
        student.enrolledCourses.has(filterCourse)
      )
    : sortedStudents;

  return (
    <div style={{ padding: "20px" }}>

      <h2>Course Enrollment Dashboard</h2>

      <h3>Add Student</h3>

      <input
        placeholder="ID"
        value={newStudent.id}
        onChange={e =>
          setNewStudent({ ...newStudent, id: e.target.value })
        }
      />

      <input
        placeholder="Name"
        value={newStudent.name}
        onChange={e =>
          setNewStudent({ ...newStudent, name: e.target.value })
        }
      />

      <input
        placeholder="Courses (comma separated)"
        value={newStudent.courses}
        onChange={e =>
          setNewStudent({ ...newStudent, courses: e.target.value })
        }
      />

      <input
        placeholder="GPA"
        value={newStudent.gpa}
        onChange={e =>
          setNewStudent({ ...newStudent, gpa: e.target.value })
        }
      />

      <button onClick={addStudent}>Add Student</button>

      <hr />

      <h3>Filter by Course</h3>

      <input
        placeholder="Course name"
        value={filterCourse}
        onChange={e => setFilterCourse(e.target.value)}
      />

      <hr />

      <h3>Unique Courses</h3>

      <ul>
        {[...uniqueCourses].map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <hr />

      <h3>Students (Sorted by GPA)</h3>

      {filteredStudents.map(student => (
        <div key={student.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          
          <h4>{student.name}</h4>

          <p>ID: {student.id}</p>
          <p>GPA: {student.gpa}</p>

          <p>Courses:</p>

          <ul>
            {[...student.enrolledCourses].map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>

          <button onClick={() => removeStudent(student.id)}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
}