import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FormControl } from '../../Components/common/FormsControls/FormsControls';
import { required } from '../../utils/validators/Validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import s from './Login.module.css'; // Импорт стилей

type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
};

type LoginFormProps = {
    captchaUrl: string;
};

type LoginFormReduxType = InjectedFormProps<FormDataType, LoginFormProps> & LoginFormProps;

const LoginForm: React.FC<LoginFormReduxType> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            <div className={s.formGroup}>
                <label className={s.formLabel}>Email</label>
                <Field
                    name="email"
                    component={FormControl}
                    validate={[required]}
                    elementType="input"
                    className={s.formInput}
                />
            </div>
            <div className={s.formGroup}>
                <label className={s.formLabel}>Password</label>
                <Field
                    name="password"
                    validate={[required]}
                    component={FormControl}
                    elementType="input"
                    type="password"
                    className={s.formInput}
                />
            </div>
            <div className={s.formGroup}>
                <label className={s.formLabel}>
                    <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                        className={s.formCheckbox}
                    />
                    Remember me
                </label>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button className={s.formButton}>Login</button>
                <div>Login:Demoaccunt123</div>
                <div>Login:free111</div>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="Captcha" className={s.formCaptchaImage} />}
            {captchaUrl && (
                <Field
                    name="captcha"
                    component={FormControl}
                    validate={[required]}
                    elementType="input"
                    placeholder="Symbols from image"
                    className={s.formCaptchaInput}
                />
            )}
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormProps>({ form: 'login' })(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to="/profile" />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
