import types from './types'

const initialValues = {
  count: 0
}

const surveyReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case types.SET_EMPLOYMENT_STATUS:
      return {
        ...state,
        con: true
      }
    case types.GET_USERDATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload
      }
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload
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
