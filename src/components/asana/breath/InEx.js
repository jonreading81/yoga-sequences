import React from 'react';

function InEx(props) {
    return (
        <div>
            <div className="asana__breath">
                In
                <div className="glyphicon glyphicon-arrow-right asana__breath__icon" aria-hidden="true" />
            </div>
            <div className="asana__breath">
                <div className="glyphicon glyphicon-arrow-left asana__breath__icon" aria-hidden="true" />
                Ex
            </div>
        </div>
    );
}

export default InEx;
