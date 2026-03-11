import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './Dashboard'
import Todo from './assignments/Todo/Todo'
import Course from './assignments/Course/Course'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App