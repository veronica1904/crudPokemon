import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRoute from './DashboardRoute';
import PrivateRoters from './PrivateRoters';
import PublicRouters from './PublicRouters';


const AppRouters = () => {
    const [checking, setChecking]=useState(true)
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    useEffect(() => {
       const auth = getAuth()
       onAuthStateChanged(auth, (user)=>{
           if(user?.uid){
                         setIsLoggedIn(true)
           }
           else{
               setIsLoggedIn(false)
           }
           setChecking(false)
       })
    }, [setIsLoggedIn, setChecking])

if(checking){
    return(
        <h1>Espere....</h1>
    )
}

    return (
        <BrowserRouter>
             <Routes>


                <Route path="/*" element={ <PrivateRoters isAut={isLoggedIn}>
              <DashboardRoute/>
                </PrivateRoters>} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;