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
        progress: 30
      }
      case types.SET_PROPRIETORSHIPS_MULTIPLIER:
        return {
          ...state,
          count: state.count * action.multiplier,
          progress: 50
        }
        case types.SET_FILLING_STATUS:
        return {
          ...state,
          count: state.count + action.count,
          progress: 70
        }
    default:
      return state
  }
}

export default surveyReducer;
