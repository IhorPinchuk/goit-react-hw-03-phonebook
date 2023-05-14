import PropTypes from 'prop-types';

import css from './ContactList.module.css';
import ContactElementList from 'components/contactElementList/ContactElementList';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          
          <ContactElementList
            name={name}
            number={number}
            handleDelete={() => handleDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
