import { useReducer, useRef } from 'react'

import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'

import logger from './logger'

import './styles.css'

const Todo = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const { job, jobs } = state

  const jobInput = useRef()

  const handleSetJob = e => dispatch(setJob(e.target.value))

  const handleAddJob = () => {
    if (job === '') return alert('Empty content. Can not add item')

    dispatch(addJob(job))
    dispatch(setJob(''))
    jobInput.current.focus()

  }

  const handleDeleteJob = index => {
    dispatch(deleteJob(index))
  }

  console.log('job: ', job)

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
