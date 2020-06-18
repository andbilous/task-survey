import types from './types'

const initialValues = {
  count: 0
}

const surveyReducer = (state = initialValues, action) => {
  switch (type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        count: state.count + action.payload
      }
    default:
      return state
  }
}

export default surveyReducer;
