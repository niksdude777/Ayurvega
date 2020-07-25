import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import data from '../data';
import LandingPage from './landing'

export class UserForm extends Component {
  state = {
    step: 1,
    disease_category:undefined
  };

  // Proceed to next step
  nextStep = (s) => {
    console.log(s)
    const { step } = this.state;
    this.setState({
      step: step + 1,disease_category:s
    });
    console.log(this.state.disease_category)
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() { 
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    {console.log(this.state.disease_category)} 
   
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            setOpen={this.props.setOpen}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            disease_category={this.state.disease_category}
            setOpen={this.props.setOpen}
          />
        );
      case 3:
        return (
         <LandingPage/> 
        )
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
