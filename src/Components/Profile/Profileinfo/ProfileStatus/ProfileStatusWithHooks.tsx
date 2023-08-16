import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

const ProfileStatusWithHooks = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b><span
                    onDoubleClick={activateMode}
                >{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        value={status}
                        onBlur={deactivateEditMode}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
