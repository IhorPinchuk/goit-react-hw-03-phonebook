import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contact__list}>
      {contacts.map((contact, id) => (
        <li className={css.contact__item} key={id}>
          {contact.name}: {contact.number}
          <button
            className={css.contact__list__item__btn}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
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
