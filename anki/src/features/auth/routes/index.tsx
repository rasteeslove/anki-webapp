import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { getMe } from "api";
import { logOut } from "utils/auth";

import { Login } from "./Login";
import { Register } from "./Register";

const AuthRoutes = () => {
    const [authRequired, setAuthRequired] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getMe()
            .then((data) => {
                if (typeof(data) != 'string') {
                    navigate(`/${data.username}`)
                } else {
                    setAuthRequired(true);
                }
            })
            .catch(() => {
                // logout user if for some reason the user object
                // was deleted from the database after the actual
                // user logged in
                logOut();
                setAuthRequired(true);
            });
    }, [navigate]);

    return(
        <>
            {
                authRequired &&
                <Routes>
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='*' element={<Navigate to='login' replace={true}/>}/>
                </Routes>
            }
        </>
    );
};

export { AuthRoutes };
