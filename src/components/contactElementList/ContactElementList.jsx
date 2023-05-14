import css from './ContactElementList.module.css';

export default function ContactElementList({ name, number, handleDelete }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.contact__list__item__btn}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
