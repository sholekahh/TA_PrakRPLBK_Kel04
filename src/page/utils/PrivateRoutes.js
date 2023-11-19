import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(){

    let authentication = {
        token: ""
    };
    return authentication.token? <Outlet /> : <Navigate to="/" />
}