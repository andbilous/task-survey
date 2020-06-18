import types from './types';

export const setEmploymentStatus = (value) => {
    if(value==='Employed'){
      return {
        type: types.SET_EMPLOYMENT_STATUS,
        payload: 10
      }
    }
      if(value==='Unemployed'){
        return {
          type: types.SET_EMPLOYMENT_STATUS,
          payload: 20
        }
      }
        if(value==='SelfEmployed'){
          return {
            type: types.SET_EMPLOYMENT_STATUS,
            payload: 10
          }
    }
};

export const setProprietorshipsCount = (value) => {

}

export const setFillingStatus = (value) =>{

}

