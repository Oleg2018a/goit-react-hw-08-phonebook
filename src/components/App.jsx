import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Register from 'page/Register';
import LogIn from 'page/LogIn';
import Home from 'page/HomePage';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Contacts from 'page/ContactsPage';
import Profile from 'page/Profile';
 



// const App = () => {
// const loading = useSelector(state => state.contacts.isLoading);
// const error = useSelector(state => state.contacts.error);
//   const dispatch = useDispatch()
  
//     useEffect(() => {
//       dispatch(fetchContacts());
//     }, [dispatch]);
  
//  return (
//    <>
//      <Section title="Phonebook">
//        <ContactForm />
//      </Section>
//      <Section title="Contacts">
//        <Filter />
//        {loading && !error && <b>Request in progress...</b>}
//        <ContactList />
//      </Section>
//    </>
//  );

// }

// export default App
 const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
          />
          <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
  );
};
export default App





