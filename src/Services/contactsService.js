import { Post, Patch, Get, Delete } from './privateApiService';

const CONTACTS_ENDPOINT = '/contats'

const addContact = async (values) => {
  return await Post(`${CONTACTS_ENDPOINT}`, values);
};

const updateContact = async (values, contact) => {
  return await Patch(`${CONTACTS_ENDPOINT}/${contact.id}`, values);
};

const getContactById = async (id) => {
  return await Get(`${CONTACTS_ENDPOINT}/${id}`);
};

const getContact = async () => {
  return await Get(`${CONTACTS_ENDPOINT}`);
};

const deleteContact = async (id) => {
  return await Delete(`${CONTACTS_ENDPOINT}/${id}`);
};

export { 
    addContact,
    deleteContact, 
    getContact,
    getContactById,
    updateContact 
}; 