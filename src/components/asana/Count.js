import React from 'react';

function Count(props) {
    const repetition = props.repetition ? `Repeat: ${props.repetition}` : '';
    const stay = props.stay ? `Stay: ${props.stay}` : '';

    return (
        <div>
            <div className="asana__count">{repetition}</div>
            <div className="asana__count">{stay}</div>
        </div>
    );
}

export default Count;
