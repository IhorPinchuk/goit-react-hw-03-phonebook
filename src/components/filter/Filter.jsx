import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ filter, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
