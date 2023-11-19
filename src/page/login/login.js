import React, { useState } from "react";
import { Avatar, Container, createTheme, Typography } from '@mui/material';
import { purple } from "@mui/material/colors";
import InputTextMessage from "../component/TextField/InputTextField";
import Buttons from "../component/Button/Button";
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AlertMessages from "../component/AlertMessage/AlertMessage";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette:{
        primary: purple,
    }
})

function HalamanLogin(params){
    const [IsShowPassword, setIsShowPassword] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);
    const [isError, setisError] = useState(false);

    let navigate = useNavigate();

    const handleSubmit =(event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log('dataa', data.get("email"));
        console.log('dataa password', data.get("password"));
        
        const email = data.get("email");
        const password = data.get("password");

        if(email === "sitisholekah@gmail.com" && password === "siti123"){
            setisSuccess(true);
            
            return navigate("/dashboard");
        }else{
            setisError(true);
        }
    };

    const handleClose = () => {
        setisSuccess(false);
        setisError(false);
    };
    
    return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display:"flex",
                    alignItems: "center",
                    flexDirection: "column"
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Avatar sx={{ bgcolor: "secondary.main"}}>
                    <LockIcon/>
                </Avatar>
                <Typography component={"h1"} variant="h5">
                    Sign In
                </Typography>
                <InputTextMessage
                    id="email"
                    label="Email Address"
                    varian="outlined"
                    fullWidth
                    required
                    margin="normal"
                    autautoFocus
                    name="email"
                    type="text"
                />
                <div style={{ display:"flex", width:"100%", position:"relative" }}>
                    <InputTextMessage
                        id="password"
                        label="password Address"
                        varian="outlined"
                        fullWidth
                        required
                        margin="normal"
                        autautoFocus
                        name="password"
                        type={IsShowPassword? "text" : "password"}
                    />
                    <div 
                        style={{ 
                            position: "absolute", 
                            right: 15, 
                            top: 33, 
                            cursor: "pointer",
                        }}
                        onClick={()=> setIsShowPassword(!IsShowPassword)}
                    >
                        {IsShowPassword ? (
                            <VisibilityOff fontSize="small" />
                        ) : (
                            <Visibility fontSize="samll" /> 
                        )}
                        </div>
                    </div>
                <Buttons
                    type="submit" variant="contained" fullWidth label ="Sign In" />     
                <AlertMessages
                    label="your email dan password is correct!"
                    open={isSuccess}
                    severity="success"
                    onClose ={handleClose}
                />
                <AlertMessages
                    label="your email dan password is wrong!"
                    open={isError}
                    severity="error"
                    onClose ={handleClose}
                />
            </Box>       
        </Container>
    </ThemeProvider>
    );
}

export default HalamanLogin;