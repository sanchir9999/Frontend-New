

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = ({ value, onChange }) => {
    return (
        <DatePicker
            selected={value}
            onChange={onChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="form-control"
        />
    );
};

export default TimePicker;
