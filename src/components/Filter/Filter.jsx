import { connect } from "react-redux";
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


const Filter = ({ value, onChangeFilter }) => {
  return (
    
    <div className={styles.containerFilter}>
      <label className={styles.titleFilter}>
        Find contact by name
        <input
          type="text"
          className={styles.inputFilter}
          name='filter'
          value={value}
          onChange={onChangeFilter}
        />
      </label>
      </div>
      
  );
}

Filter.defaultProps = {
  value: '',
  number: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(phonebookActions.filterContact(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);