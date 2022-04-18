import React from 'react';
// import PropTypes from "prop-types";
// import { reduxForm, Field, propTypes } from 'redux-form';
// import { required } from 'redux-form-validators';
// import { renderField, renderError } from '../../utils/renderUtils';
import { signupUser } from '../../actions/authActions';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateForm = (values) => {
    const errors = {};
    const { password1, password2 } = values;
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password1) {
      errors.password1 = 'Required';
    }
    if (password1 !== password2) {
      errors.password2 = 'Password does not match.';
    }
    return errors;
  };
  return (
    <div className='row justify-content-center'>
      <Form
        onSubmit={(values) => signupUser(values, dispatch, navigate)}
        validate={validateForm}
      >
        {({ handleSubmit }) => (
          <form className='col col-sm-4 card mt-5 p-2' onSubmit={handleSubmit}>
            <h4 className='text-md-center'>Sign Up</h4>
            <hr />

            <fieldset className='form-group'>
              <Field name='email'>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Email'
                      className='form-control'
                    />
                    {meta.error && meta.touched && (
                      <div className='alert alert-danger p-1'>
                        <small>{meta.error}</small>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </fieldset>

            <fieldset className='form-group'>
              <Field name='username'>
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Username'
                      className='form-control'
                    />
                    {meta.error && meta.touched && (
                      <div className='alert alert-danger p-1'>
                        <small>{meta.error}</small>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </fieldset>

            <fieldset className='form-group'>
              <Field name='password1'>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input
                      {...input}
                      type='password'
                      placeholder='Password'
                      className='form-control'
                    />
                    {meta.error && meta.touched && (
                      <div className='alert alert-danger p-1'>
                        <small>{meta.error}</small>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </fieldset>

            <fieldset className='form-group'>
              <Field name='password2'>
                {({ input, meta }) => (
                  <div>
                    <label>Confirm Password</label>
                    <input
                      {...input}
                      type='password'
                      placeholder='Password'
                      className='form-control'
                    />
                    {meta.error && meta.touched && (
                      <div className='alert alert-danger p-1'>
                        <small>{meta.error}</small>
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </fieldset>

            {/* {renderError(error)} */}

            <fieldset className='form-group'>
              <button action='submit' className='btn btn-primary'>
                Sign Up
              </button>
            </fieldset>
          </form>
        )}
      </Form>
    </div>
  );
};

// Sync field level validation for password match

export default Signup;
