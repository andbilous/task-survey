import types from './types'

const initialValues = {
  count: 0,
  employmentStatus:''
}

const surveyReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        count: state.count + action.count,
        employmentStatus: action.employmentStatus
      }
      case types.SET_PROPRIETORSHIPS_MULTIPLIER:
        return {
          ...state,
          count: state.count * act
        }
    default:
      return state
  }
}

export default surveyReducer;
