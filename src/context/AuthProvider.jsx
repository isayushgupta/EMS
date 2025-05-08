import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setuserData] = useState(null);
    // const data = getLocalStorage();
    // console.log(data);

    useEffect(() => {
        setLocalStorage();
        const { employees, admin } = getLocalStorage();
        setuserData({ employees, admin });
    }, []);

    // console.log(userData);
    
    return(
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
