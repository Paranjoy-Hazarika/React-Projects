import './App.css'
import { Link } from 'react-router-dom'
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

            <article className="assignment-card">
              <div className="card-content">
                <div className="card-header">
                  <h3>Assignment 1</h3>
                  <hr />
                </div>

                <div className="card-details">
                  <p>
                    <span>Date:<br /></span>
                    12/21/12
                  </p>
                  <p>
                    <span>Topic:<br /></span>
                    Todo Manager
                  </p>
                </div>
              </div>

              <Link to='/course'>Open</Link>
            </article>

            <article className="assignment-card">
              <div className="card-content">
                <div className="card-header">
                  <h3>Assignment 2</h3>
                  <hr />
                </div>

                <div className="card-details">
                  <p>
                    <span>Date:<br /></span>
                    12/21/12
                  </p>
                  <p>
                    <span>Topic:<br /></span>
                    Student Course Manager
                  </p>
                </div>
              </div>

              <Link to='/course'>Open</Link>
            </article>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard