import React, {useState} from "react";
import Login from "./login/login";
import {fetchAuthorization} from "../../../reducers/authorization-slice";
import {useDispatch} from "react-redux";


const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const authorising = () => {
        dispatch(fetchAuthorization({email, password}));
    }

    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            authorising={authorising}
        />
    )
}

export default LoginContainer