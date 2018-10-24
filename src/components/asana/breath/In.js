import React from 'react';

function In(props) {
    return (
        <div>
            <div className="asana__breath">
              <div className="visible-xs-block text-center">
                In
                <div className="glyphicon glyphicon-arrow-down asana__breath__icon" aria-hidden="true" />
              </div>
              <div className="hidden-xs">
                In
                <div className="glyphicon glyphicon-arrow-right asana__breath__icon" aria-hidden="true" />
              </div>
          </div>
        </div>
    );
}

export default In;
