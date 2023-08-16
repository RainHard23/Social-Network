import React, { ChangeEvent, useState } from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/users.jpg";
import ProfileStatusWithHooks from "../../../Components/Profile/Profileinfo/ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm, { ProfileDataFormValuesType } from "../../Profile/Profileinfo/ProfileDataForm";
import { ProfileTypeProps } from "../../../Components/Profile/Profile";

type Photos = {
    large: string;
    small: string;
}

export type ProfileType = {
    photos: Photos;
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
};

type ProfileInfoPropsType = {
    profile: ProfileType | null;
    isOwner: boolean;
    status: string;
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    saveProfile: (profile: ProfileTypeProps) => Promise<void>;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            props.savePhoto(file);
        }
    };

    const onSubmit = (formData: ProfileDataFormValuesType) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.content}>
                <img src="https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg"
                     alt="#" className={s.contentImg} />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt="" />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true); }} />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileType;
    isOwner: boolean;
    goToEditMode: () => void;
};

const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={props.profile?.contacts[key]} />;
            })}
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }: { contactTitle: string, contactValue: string }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>;
};

export default ProfileInfo;
