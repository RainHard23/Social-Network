import React, { ChangeEvent } from 'react';
import s from './Profilestatus.module.css';

type PropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

type StateType = {
    editMode: boolean;
    status: string;
};

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={s.statusContainer}>
                {!this.state.editMode &&
                    <div className={s.status} onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.editMode}>
                        <input
                            className={s.inputField}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
