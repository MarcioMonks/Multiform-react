// Context - caixinha que vai armazenar os dados
// Reducer - um cara que executa ações específicas (agrupamento de ações)
// Provider - o ambiente onde se tem acesso aos dados (contexto)
// Hook - vai simplificar o processo para se ter acesso ao contexto, bem como a troca de informações

import { createContext, useContext, useReducer } from 'react';

// Context
const FormContext = createContext(undefined);

// Reducer
enum FormActions {
   setCurrentStep,
   setName,
   setLevel,
   setEmail,
   setGithub
}

const formReducer = (state, action) => {
   switch(action.type) {
      case FormActions.setCurrentStep:
         return {...state, currentStep: action.payload};
      case FormActions.setName:
         return {...state, currentName: action.payload};
      case FormActions.setLevel:
         return {...state, currentLevel: action.payload};
      case FormActions.setEmail:
         return {...state, currentEmail: action.payload};
      case FormActions.setGithub:
         return {...state, currentGithub: action.payload};
      default:
         return state;
   }
}

// Provider
const FormProvider = ({children}) => {
   const [state, dispatch] = useReducer(formReducer, initialData);
   
   return (
      <FormContext.Provider>
         {children}
      </FormContext.Provider>
   )
}