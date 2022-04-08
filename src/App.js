import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>}>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;