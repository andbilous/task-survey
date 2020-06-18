import types from './types'

const initialValues = {
  count: 0,
  employmentStatus:'',
  progress: 0
}

const surveyReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        count: state.count + action.count,
        employmentStatus: action.employmentStatus,
        progress: 0
      }
      case types.SET_PROPRIETORSHIPS_MULTIPLIER:
        return {
          ...state,
          count: state.count * action.multiplier
        }
        case types.SET_FILLING_STATUS:
        return {
          ...state,
          count: state.count + action.count
        }
    default:
      return state
  }
}

export default surveyReducer;
