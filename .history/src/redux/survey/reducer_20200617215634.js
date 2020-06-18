import types from './types'

const initialValues = {
  count: 0
}

const surveyReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        count: state.count+payload
      }
    default:
      return state
  }
}

export default surveyReducer;
