import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div >
            <div className={s.content}>
                <img src="https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg" alt="#"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
)
}

export default ProfileInfo;