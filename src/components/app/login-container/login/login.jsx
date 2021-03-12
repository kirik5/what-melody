import React from "react";
import melodyLogo from "../../../../img/melody-logo.png";
import PropTypes from "prop-types";

const Login = ({email, setEmail, password, setPassword, authorising}) => {
    const changeName = (evt) => {
        evt.preventDefault();
        setEmail(evt.target.value);
    }

    const changePassword = (evt) => {
        evt.preventDefault();
        setPassword(evt.target.value);
    }

    const authorization = (evt) => {
        evt.preventDefault();
        authorising();
    }

    return (
        <section className="login">
            <div className="login__logo">
                <img src={melodyLogo} alt="Угадай мелодию" width="186" height="83"/>
            </div>
            <h2 className="login__title">Вы настоящий меломан!</h2>
            <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
            <form className="login__form" action="" onSubmit={authorization}>
                <p className="login__field">
                    <label className="login__label" htmlFor="name">Логин</label>
                    <input className="login__input" type="text" name="name" id="name" value={email} onChange={changeName}/>
                </p>
                <p className="login__field">
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input className="login__input" type="password" name="password" id="password" value={password} onChange={changePassword}/>
                    <span className="login__error">Неверный пароль</span>
                </p>
                <button className="login__button button" type="submit">Войти</button>
            </form>
            {/*<button className="replay" type="button">Сыграть ещё раз</button>*/}
        </section>
    )
}

export default Login;

Login.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    authorising: PropTypes.func.isRequired,
}