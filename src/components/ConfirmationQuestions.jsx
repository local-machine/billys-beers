import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you authorized to create a new beer?</p>
      <button onClick={props.onAuthorizationConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onAuthorizationConfirmation: PropTypes.func
};

export default ConfirmationQuestions;