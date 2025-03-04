import React, { useContext } from 'react';
import { AuthContext } from '../Components/FirebaseProvider/FirebaseProvider';

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;