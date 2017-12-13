import React from 'react';
import check from '../../check.svg';

function Checked(props) {
    const checkedOff = props.checkedOff;
    if (checkedOff === true) {
        return (
            <img src={check} alt="" />
        )
    } else {
        return null;
    }
}

export default Checked;