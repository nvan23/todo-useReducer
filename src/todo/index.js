import { useState, useRef } from 'react'
import './styles.css'

const Todo = () => {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const jobInput = useRef()

  const handleSetJob = e => {
    setJob(e.target.value)
  }

  const handleAddJob = () => {
    job === ''
      ? alert('Empty content. Can not add item')
      : setJobs([...jobs, job])

    setJob('')
    jobInput.current.focus()
  }

  const handleDeleteJob = (index) => {
    const cloneJobs = [...jobs]
    cloneJobs.splice(index, 1)
    setJobs(cloneJobs)
  }

  return (
    <div className="main">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          ref={jobInput}
          value={job}
          onChange={handleSetJob}
        />
        <button onClick={handleAddJob}>Add</button>
      </div>
      {!jobs?.length && <p>No item</p>}
      <ul>
        {
          jobs.map((job, index) =>
            <li key={index}>
              {job}
              <span onClick={() => handleDeleteJob(index)}> &times;</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Todo
