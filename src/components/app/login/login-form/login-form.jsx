import React from "react"
import {Field, reduxForm} from "redux-form"


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined


const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (

    <p className="login__field">
        <label className="login__label" htmlFor="name">{label}</label>
        <input className="login__input" placeholder={label} type={type} id={label} {...input}/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </p>
)


const LoginForm = (props) => {
    const { handleSubmit, submitting, error } = props

    return (
        <form className="login__form" onSubmit={handleSubmit}>
            {error && <div className="sign-in__message">
                <p>{error}</p>
            </div>}

            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
                validate={[required, email]}
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required, minLength8]}
            />

            <button className="login__button button" type="submit" disabled={submitting}>Войти</button>
        </form>
    )
}


export default reduxForm({
    form: 'singin',
})(LoginForm)