import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import RequireAuth from './auth/RequireAuth';
import Landing from './Landing';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';
import SignupDone from './auth/SignupDone';
// import AccountActivation from './auth/AccountActivation';
import UserProfile from './auth/UserProfile';
import UserProfileEdit from './auth/UserProfileEdit';
import PasswordChange from './auth/PasswordChange';
import PasswordReset from './auth/PasswordReset';
import PasswordResetDone from './auth/PasswordResetDone';
// import PasswordResetConfirm from './auth/PasswordResetConfirm';
import NoMatch from './NoMatch';

const MainContent = () => (
  <div>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/signup' element={<Signup />} />
      {/* <Route
        path='/account/confirm-email/:key'
        element={<AccountActivation />}
      /> */}
      <Route path='/signup_done' element={<SignupDone />} />
      <Route path='/reset_password' element={<PasswordReset />} />
      <Route path='/reset_password_done' element={<PasswordResetDone />} />
      {/* <Route path='/reset/:uid/:token/' element={<PasswordResetConfirm />} /> */}
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/profile_edit' element={<UserProfileEdit />} />
      <Route path='/change_password' element={<PasswordChange />} />
      <Route component={<NoMatch />} />
    </Routes>
  </div>
);

export default MainContent;
