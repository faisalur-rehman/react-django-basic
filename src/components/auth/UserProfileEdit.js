import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateUserProfile } from '../../actions/authActions';

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setformValues] = useState({});

  useEffect(() => {
    if (token) {
      setformValues({ ...user });
    } else {
      navigate('/login');
    }
  }, [user]);

  const validateForm = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.first_name) {
      errors.first_name = 'Required';
    }
    if (!values.last_name) {
      errors.last_name = 'Required';
    }
    if (!values.website) {
      errors.website = 'Required';
    }
    if (!values.about) {
      errors.about = 'Required';
    }
    return errors;
  };

  return (
    <div className='row justify-content-center'>
      <Form
        initialValues={formValues}
        onSubmit={(values) => updateUserProfile(values, dispatch, navigate)}
        validate={validateForm}
      >
        {({ handleSubmit }) => (
          <form className='col col-sm-4 card mt-5 p-2' onSubmit={handleSubmit}>
            <h4 className='text-md-center'>Edit Profile</h4>
            <hr />

            <fieldset className='form-group'>
              <Field name='username'>
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='username'
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
              <Field name='first_name'>
                {({ input, meta }) => (
                  <div>
                    <label>FirstName</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='First Name'
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
              <Field name='last_name'>
                {({ input, meta }) => (
                  <div>
                    <label>Last Name</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Last Name'
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
              <Field name='website'>
                {({ input, meta }) => (
                  <div>
                    <label>Website</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='Website'
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
              <Field name='about'>
                {({ input, meta }) => (
                  <div>
                    <label>About Yourself</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='About Yourself'
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
                Save
              </button>
            </fieldset>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Login;
