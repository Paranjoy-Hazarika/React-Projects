import "./App.css"

function Dashboard() {
  return (
    <div className="container">
      <header>
        <img src="./assets/coffee-mug.png" />
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
              <h3>Assignment 1</h3>
              <p>Date: 12/21/12</p>
              <p>Course Enrollment Dashboard</p>
              <a href="./assignment1/">Open</a>
            </article>

            <article className="assignment-card">
              <h3>Assignment 2</h3>
              <p>Date: 12/21/12</p>
              <p>Todo Manager</p>
              <a href="./assignment2/">Open</a>
            </article>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard