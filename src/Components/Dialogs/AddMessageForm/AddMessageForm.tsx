import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {FormControl} from "../../../Components/common/FormsControls/FormsControls";



const maxLength50 = maxLengthCreator(50)

export type AddMessageType = {
    newMessageBody: string
}

 const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} name='newMessageBody'
                validate={[required, maxLength50]}
                       elementType='textarea'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<AddMessageType>({form: 'dialogAddMessageForm'}) (AddMessageForm)