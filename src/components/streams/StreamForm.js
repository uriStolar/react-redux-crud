import React from 'react';
import { Field, reduxForm } from "redux-form";

class StreamForm  extends React.Component {

  renderInput({ input, label, meta: { touched, error } }) {
    const className = `field ${touched && error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div className="ui error message">{touched && error}</div>
      </div>
    );
  }
 
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'stream-form', validate
})(StreamForm);
