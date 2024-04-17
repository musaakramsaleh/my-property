import React, { createContext } from 'react';

export const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {
      const allvalues = {name:'test'}
    return (
        <AuthContext.Provider value = {allvalues}>
              {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;