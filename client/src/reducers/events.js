const events = (state=[], action) => {
  switch(action.type) {
    case 'GET_EVENTS':
      if(action.events)
        return action.events
      return []
    case 'ADD_EVENT':
      return [ action.newEvent, ...state ]
    default:
      return state;
  }
}

export default events;
