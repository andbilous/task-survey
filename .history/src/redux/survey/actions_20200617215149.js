import types from './types';

export const setEmploymentStatus = (value) => {
    if(value==='Employed'){
      return {
        type: types.SET_EMPLOYMENT_STATUS,
        
      }
    }
      if(value==='Unemployed'){
        return {
  
        }
      }
        if(value==='SelfEmployed'){
          return {
            
          }
    }
};

export const setProprietorshipsCount = (value) => {

}

export const setFillingStatus = (value) =>{

}

