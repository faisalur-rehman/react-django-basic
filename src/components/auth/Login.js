import React from 'react';
// import PropTypes from "prop-types";
// import { reduxForm, Field, propTypes } from 'redux-form';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { required } from 'redux-form-validators';
// import { renderField, renderError } from '../../utils/renderUtils';
import { loginUser } from '../../actions/authActions';

const Login = () => {
  // const { handleSubmit, error } = this.props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <div className='row justify-content-center'>
      <Form
        onSubmit={(values) => loginUser(values, dispatch, navigate)}
        validate={validate}
      >
        {({ handleSubmit }) => (
          <form className='col col-sm-4 card mt-5 p-2' onSubmit={handleSubmit}>
            <h4 className='text-md-center'>Please Log In</h4>
            <hr />

            <div className='form-group'>
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
            </div>

            <div className='form-group'>
              <Field name='password'>
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
            </div>

            <div className='form-group'>
              {/* {renderError(error)} */}
              <button action='submit' className='btn btn-primary'>
                Login
              </button>
            </div>

            <p>
              Not registered? <Link to='/signup'>Signup Here!</Link>
            </p>
            <Link to='/reset_password'>forgot password?</Link>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Login;
