import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../Components/common/FormsControls/FormsControls";
import {required} from "../../utils/validators/Validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={FormControl}
                       validate={[required]}
                       elementType='input'
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={FormControl}
                       elementType='input'
                       type='password'
                />

            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={FormControl}
                />
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
        ;
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);