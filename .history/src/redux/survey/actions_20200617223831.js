import types from './types';

export const setEmploymentStatus = (value) => {
    if(value === 'Employed'){
      return {
        type: types.SET_EMPLOYMENT_STATUS,
        employmentStatus: value,
        count: 10
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
            payload: 30
          }
    }
};

export const setProprietorshipsCount = (value) => {

}

export const setFillingStatus = (value) =>{

}

