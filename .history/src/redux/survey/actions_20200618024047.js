import types from './types';

export const setEmploymentStatus = (value) => {
    if(value === 'Employed'){
      return {
        type: types.SET_EMPLOYMENT_STATUS,
        employmentStatus: value,
        count: 10,

      }
    }
      if(value === 'Unemployed'){
        return {
          type: types.SET_EMPLOYMENT_STATUS,
          employmentStatus: value,
          count: 20
        }
      }
        if(value === 'SelfEmployed'){
          return {
            type: types.SET_EMPLOYMENT_STATUS,
            employmentStatus: value,
            count: 30
          }
    }
};

export const setProprietorshipsCount = (value) => ({
    type: types.SET_PROPRIETORSHIPS_MULTIPLIER,
    multiplier: value
})

export const setFillingStatus = (values) =>{
  if(!values.length){
    return {
      type: types.SET_FILLING_STATUS,
      count: 0
    }
}
  if(values.length===1){
    return {
      type: types.SET_FILLING_STATUS,
      count: 10
    }
}
  return {
    type: types.SET_FILLING_STATUS,
    count: (values.length)*5
  }
}

export const displayResult = () =>

