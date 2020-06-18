import types from './types'

const initialValues = {
  count: 0,
  
}

const surveyReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        count: state.count + action.count,

      }
    default:
      return state
  }
}

export default surveyReducer;
