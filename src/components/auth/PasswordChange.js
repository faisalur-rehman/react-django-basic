import React, { useEffect } from 'react';
// import PropTypes from "prop-types";
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { required } from 'redux-form-validators';
import { changePassword } from '../../actions/authActions';
// import { renderField, renderError } from '../../utils/renderUtils';

const PasswordChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  const validateForm = (values) => {
    const errors = {};
    const { new_password1, new_password2 } = values;
    if (!new_password1) {
      errors.new_password1 = 'Required';
    }
    if (!values.old_password) {
      errors.old_password = 'Required';
    }
    if (new_password1 !== new_password2) {
      errors.new_password2 = 'Password does not match.';
    }
    return errors;
  };

  return (
    <div className='row justify-content-center'>
      <Form
        onSubmit={(values) => changePassword(values, dispatch, navigate)}
        validate={validateForm}
      >
        {({ handleSubmit }) => (
          <form className='col col-sm-4 card mt-5 p-2' onSubmit={handleSubmit}>
            <h4 className='text-md-center'>Change Password</h4>
            <hr />

            <fieldset className='form-group'>
              <Field name='old_password'>
                {({ input, meta }) => (
                  <div>
                    <label>Old Password</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Old Password'
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
              <Field name='new_password1'>
                {({ input, meta }) => (
                  <div>
                    <label>New Password</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='New Password'
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
              <Field name='new_password2'>
                {({ input, meta }) => (
                  <div>
                    <label>Confirm Password</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Confirm Password'
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
              {/* {renderError(error)} */}
              <button action='submit' className='btn btn-primary'>
                Submit
              </button>
            </fieldset>
          </form>
        )}
      </Form>
    </div>
  );
};

// Sync field level validation for password match

export default PasswordChange;
