import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import s from './FormsControls.module.css';

type Props = WrappedFieldProps & {
    elementType: 'input' | 'textarea'; // Определяем возможные значения для elementType
};

export const FormControl: React.FC<Props> = ({ input, meta, elementType, ...props }) => {
    const hasError = meta.touched && meta.error;

    // В зависимости от значения elementType, отображаем input или textarea
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {elementType === 'textarea' ? (
                    <textarea {...input} {...props} />
                ) : (
                    <input {...input} {...props} />
                ) }
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};
