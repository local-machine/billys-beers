import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewBeerForm from './NewBeerForm';
import PropTypes from 'prop-types';


class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAuthorizationConfirmation = this.handleAuthorizationConfirmation.bind(this);
  }


  handleAuthorizationConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onAuthorizationConfirmation={this.handleAuthorizationConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func
};


export default NewBeerControl;