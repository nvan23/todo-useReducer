import {
  SET_JOB,
  ADD_JOB,
  DELETE_JOB,
} from './constants'

export const initState = {
  job: '',
  jobs: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      }

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }

    case DELETE_JOB:
      const cloneJobs = [...state.jobs]
      cloneJobs.splice(action.payload, 1)

      return {
        ...state,
        jobs: cloneJobs
      }

    default:
      throw new Error('Invalid Action')
  }
}

export default reducer