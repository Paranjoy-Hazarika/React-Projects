import './App.css'
import { Link } from 'react-router-dom'

import assignments from './data/assignments.json'
import mug from './assets/coffee-mug.png'

function Dashboard() {
  return (
    <div className="container">
      <header>
        <img src={mug} alt="coffee-mug" />
        <div className="header-content">
          <h1>Paranjoy Hazarika</h1>
          <p>Roll No: CSB24017</p>
          <p>Course Code: CSBTxyz</p>
          <p>Course Title: Advance Programming (AP)</p>
        </div>
      </header>

      <main>
        <section className="assignments">
          <h2>Assignments</h2>

          <div className="assignment-grid">

            {assignments.map((assignment) => (
              <article key={assignment.id} className="assignment-card">

                <div className="card-content">
                  <div className="card-header">
                    <h3>{assignment.title}</h3>
                    <hr />
                  </div>

                  <div className="card-details">
                    <p>
                      <span>Date:<br /></span>
                      {assignment.date}
                    </p>
                    <p>
                      <span>Topic:<br /></span>
                      {assignment.topic}
                    </p>
                  </div>
                </div>

                <Link to={assignment.route}>Open</Link>
              </article>
            ))}

          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard