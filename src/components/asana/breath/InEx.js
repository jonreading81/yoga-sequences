import React from 'react';

function InEx(props) {
    return (
        <div>
          <div className="visible-xs-block text-center">
            <div className="asana__breath">
                Ex
                <div className="glyphicon glyphicon-arrow-up asana__breath__icon" aria-hidden="true" />
            </div>
            <div className="asana__breath">
                <div className="glyphicon glyphicon-arrow-down asana__breath__icon" aria-hidden="true" />
                In
            </div>
        </div>
        <div className="hidden-xs">
          <div className="asana__breath">
              In
              <div className="glyphicon glyphicon-arrow-right asana__breath__icon" aria-hidden="true" />
          </div>
          <div className="asana__breath">
              <div className="glyphicon glyphicon-arrow-left asana__breath__icon" aria-hidden="true" />
              Ex
          </div>
      </div>
      </div>
    );
}

export default InEx;
