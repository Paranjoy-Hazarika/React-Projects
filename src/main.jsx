import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Dashboard.jsx'
import Course from './assignments/Course/Course.jsx'
import Todo from './assignments/Todo/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
