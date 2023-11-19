import React from "react";
import Buttons from "../component/Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function Notfound() {
    return (
        <div
            style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            Notfound . . .
        </div>
    )
}