import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileTypeProps = {
    userId?: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string
    contacts?: {
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



const Profile = (props: any) => {

    return (
        <div className={s.content}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                        saveProfile={props.saveProfile}
            />

            <MyPostsContainer/>
        </div>
    )
}

export default Profile;