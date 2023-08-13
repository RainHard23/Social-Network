import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormControl } from "../../../Components/common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/Validators";
import { ProfileType } from "../../Profile/Profileinfo/ProfileInfo";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css'
import { ProfileTypeProps } from "../../../Components/Profile/Profile";

export type ProfileDataFormValuesType = {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
};

type ProfileProps = {
    profile: ProfileType;
};

type ProfileDataFormProps = InjectedFormProps<ProfileDataFormValuesType, ProfileProps> & ProfileProps;

const ProfileDataForm: React.FC<ProfileDataFormProps> = ({ handleSubmit, profile, error }) => {

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Save</button>
            </div>
            <div>
                <b>Full name</b>: {
                <Field
                    placeholder={'Full name'}
                    name={'fullName'}
                    component={FormControl}
                    validate={[required]}
                    elementType='input'
                />
            }
            </div>
            <div>
                <b>Looking for a job</b>:
                <Field
                    name={'lookingForAJob'}
                    component={FormControl}
                    validate={[]}
                    type={"checkbox"}
                />
            </div>

            <div>
                <b>My professional skills</b>:
                <Field
                    placeholder={'My professional skills'}
                    name={'lookingForAJobDescription'}
                    component={FormControl}
                    validate={[]}
                    elementType='textarea'
                />
            </div>

            <div>
                <b>About me</b>:
                <Field
                    placeholder={'About me'}
                    name={'aboutMe'}
                    component={FormControl}
                    validate={[]}
                    elementType='textarea'
                />
            </div>
            <div>
                <b>Contacts</b>: {profile.contacts && Object.keys(profile.contacts).map(key => {
                return (

                    <div className={s.contact} key={key}>
                        <b>{key}: <Field
                            placeholder={key}
                            name={"contacts." + key}
                            component={FormControl}
                            validate={[]}
                            elementType='input'
                        /></b>
                    </div>
                );
            })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormValuesType, ProfileProps>({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;
