import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../actions/authActions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log('user', user);
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const renderUser = () => {
    if (user) {
      return (
        <div className='mx-2'>
          <h4>username: {user.username}</h4>
          <h4>First Name: {user.first_name}</h4>
          <h4>Last Name: {user.last_name}</h4>
          <h4>email: {user.email}</h4>
          <h4>Website: {user.website}</h4>
          <hr />
          <h4>About Myself:</h4>
          <p>{user.about}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {renderUser()} <hr />
      <Link className='btn btn-primary mr-2' to='/profile_edit'>
        Update Profile
      </Link>
      <Link className='btn btn-primary' to='/change_password'>
        Change Password
      </Link>
    </div>
  );
};

export default UserProfile;
