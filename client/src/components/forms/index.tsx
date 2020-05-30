import React, { useState } from 'react';
import EnterForm from './enter';
import Registration from './registration'

export default function Forms() {
    const [formType, setFormType] = useState('enter');
    return (
        <>
            {
                (formType === 'enter') ?
                    <EnterForm setFormType={setFormType} />
                :
                    <Registration />
            }
        </>
    );
}
