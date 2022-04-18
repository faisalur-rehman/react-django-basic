import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// import { required } from 'redux-form-validators';

// import { renderField, renderError } from '../../utils/renderUtils';
import { resetPassword } from '../../actions/authActions';

const PasswordReset = () => {
  // const { handleSubmit, error } = this.props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  return (
    <div className='row justify-content-center'>
      <Form
        onSubmit={(values) => resetPassword(values, dispatch, navigate)}
        validate={validateForm}
      >
        {({ handleSubmit }) => (
          <form className='col col-sm-4 card mt-5 p-2' onSubmit={handleSubmit}>
            <h4 className='text-md-center'>Reset Your Password</h4>
            <hr />

            <fieldset className='form-group'>
              <Field name='email'>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input
                      {...input}
                      type='text'
                      placeholder='email'
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

export default PasswordReset;
