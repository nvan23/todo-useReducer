const logger = reducer => {
  return (oldState, action) => {
    console.group(action.type)

    console.log('Old State: ', oldState)
    const newState = reducer(oldState, action)
    console.log('Action: ', action)

    console.log('New State: ', newState)

    console.groupEnd()

    return newState
  }
}

export default logger