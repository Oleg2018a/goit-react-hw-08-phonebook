import React, { useEffect } from 'react'
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from '@mui/material';
import { fetchContacts } from 'redux/operation';
import { useDispatch } from 'react-redux';

const Contacts = () => {
   const dispatch = useDispatch();
  

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box padding={3} sx={{ margin: '0 auto', textAlign: 'center' }}>
            <h2>Phonebook</h2>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Box>
        </Box>
      </>
    );
}

export default Contacts