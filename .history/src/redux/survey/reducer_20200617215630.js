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

    case types.GET_USERDATA_FAILURE:
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}

export default surveyReducer;
