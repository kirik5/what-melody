import React from "react"
import melodyLogo from "../../../img/melody-logo.png"
import LoginForm from "./login-form/login-form"
import {getIsLoading, login} from "../../../reducers/authorization-slice"
import {useDispatch, useSelector} from "react-redux"
import Loading from "../loading/loading";


const Login = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)

    const submitHandler = (value) => {
        dispatch(login(value))
    }

    return (
        <>
            <section className="login">
                <div className="login__logo">
                    <img src={melodyLogo} alt="Угадай мелодию" width="186" height="83"/>
                </div>
                <h2 className="login__title">Вы настоящий меломан!</h2>
                <p className="login__text">Хотите узнать свой результат? Представтесь!</p>

                <LoginForm
                    onSubmit={submitHandler}
                />

            </section>
            {isLoading === 'loading' && <Loading/>}
        </>
    )
}


export default Login